import React from "react";
import { useLocation } from "react-router";

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};
