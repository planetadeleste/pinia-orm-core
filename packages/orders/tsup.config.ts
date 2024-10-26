import configTsup from "../../tsup.config";

export default configTsup("pinia-orm-orders", [
  "@planetadeleste/pinia-orm-auth",
  "@planetadeleste/pinia-orm-core",
  "@planetadeleste/pinia-orm-shopaholic",
]);
