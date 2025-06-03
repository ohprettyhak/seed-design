import type * as React from "react";

import { listItem, type ListItemVariantProps } from "@seed-design/css/recipes/list-item";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { createSlotRecipeContext } from "../../utils/createSlotRecipeContext";

const { withContext, withProvider } = createSlotRecipeContext(listItem);

export interface ListItemProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement>,
    ListItemVariantProps {}

export const ListItem = withProvider<HTMLDivElement, ListItemProps>(Primitive.div, "root");

export interface ListContentProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const ListContent = withContext<HTMLDivElement, ListContentProps>(Primitive.div, "content");

export interface ListPrefixProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const ListPrefix = withContext<HTMLDivElement, ListPrefixProps>(Primitive.div, "prefix");

export interface ListSuffixProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const ListSuffix = withContext<HTMLDivElement, ListSuffixProps>(Primitive.div, "suffix");

export interface ListTitleProps extends PrimitiveProps, React.HTMLAttributes<HTMLSpanElement> {}

export const ListTitle = withContext<HTMLSpanElement, ListTitleProps>(Primitive.span, "title");

export interface ListDetailProps extends PrimitiveProps, React.HTMLAttributes<HTMLSpanElement> {}

export const ListDetail = withContext<HTMLSpanElement, ListDetailProps>(Primitive.span, "detail");
