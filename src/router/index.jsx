import React from "react";
import { Route } from "react-router-dom";
import Cart from "@/components/cart/cart";
import Home from "p/home";
import Catalog from "p/catalog";
import Orders from "@/components/orders";
import Result from "@/components/result";
import ErrorPage from "p/error";
import SinglePage from "p/singlePage";
import { CSSTransition } from "react-transition-group";
import "./router.css";

const routesArray = [
  {
    name: "home",
    path: "/",
    component: Home,
    exact: true,
    strict: false,
  },
  {
    name: "catalog",
    path: "/catalog",
    component: Catalog,
    exact: true,
    strict: true,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
    exact: true,
    strict: true,
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
    exact: true,
    strict: true,
  },
  {
    name: "single",
    path: "/catalog-list/:id",
    component: SinglePage,
    exact: true,
    strict: true,
  },
  {
    path: "**",
    component: ErrorPage,
  },
];

export let error = (_path) => {
  const routs = [];
  routesArray.forEach(({ path }) => {
    if (path === "**") {
      return false;
    }
    const regExp = path.includes("/:") ? new RegExp(`^${path.split("/:")[0]}\/.{1,5}$`, "i") : new RegExp(`^${path}$`, "i");
    if (regExp.test(_path)) {
      routs.push(path);
    }
  });
  return routs.length !== 1 ? true : false;
};

export const routes = routesArray.map((rout) => (
  <Route exact={rout.exact} strict={rout.strict} key={rout.path} path={rout.path}>
    {({ match }) => (
      <CSSTransition in={match != null} timeout={300} classNames="page"  unmountOnExit>
        <rout.component match={match}  />
      </CSSTransition>
    )}
  </Route>
));

const routesMap = (key) => {
  const map = new Map();
  routesArray.forEach((rout) => map.set(rout.name, rout.path));
  if (map.has(key)) {
    return map.get(key);
  }
  throw new Error(`Rout with name --${key}-- not found!!!`);
};

export { routesMap };
