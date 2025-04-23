import * as React from "react";
declare type ReactChildArray = ReturnType<typeof React.Children.toArray>;
declare function flattenChildren(children: React.ReactNode): ReactChildArray;
export default flattenChildren;
