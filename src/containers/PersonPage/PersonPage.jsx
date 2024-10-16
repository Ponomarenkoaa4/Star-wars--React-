import React, { useEffect, useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonImg from "@components/PersonPage/PersonImg";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import UiLoading from "@ui/UiLoading";

import { getApiResource } from "@utils/network";
import { getPeopleImg } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";

import styles from "./PersonPage.module.css";

const PersonFilms = lazy(() => import("@components/PersonPage/PersonFilms"));

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState([]);
  const [personId, setPersonId] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImg(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonImg
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.bool,
};

export default withErrorApi(PersonPage);
