import "./types/User";
import "./types/Note";
import "./types/Category";

import { builder } from "./builder";

export const schema = builder.toSchema()