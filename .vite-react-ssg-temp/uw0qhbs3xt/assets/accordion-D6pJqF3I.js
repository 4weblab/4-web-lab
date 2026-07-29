import { j as jsxDEV } from "../main.mjs";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { c as cn } from "./PageBreadcrumb-bEWc7UIl.js";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/accordion.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/accordion.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/accordion.tsx",
    lineNumber: 22,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/dev-server/src/components/ui/accordion.tsx",
  lineNumber: 21,
  columnNumber: 3
}, void 0));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxDEV("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
      fileName: "/dev-server/src/components/ui/accordion.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/accordion.tsx",
    lineNumber: 41,
    columnNumber: 3
  },
  void 0
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export {
  Accordion as A,
  AccordionItem as a,
  AccordionTrigger as b,
  AccordionContent as c
};
