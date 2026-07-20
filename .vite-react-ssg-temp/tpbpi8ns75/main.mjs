import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useLocation, Link, Outlet, Navigate } from "react-router-dom";
import * as React from "react";
import React__default, { useEffect, createContext, useRef, useLayoutEffect, useId, useContext, useInsertionEffect, useMemo, useCallback, Children, isValidElement, useState, Fragment as Fragment$1, createElement, forwardRef, Component, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Cookie, Lightbulb, ArrowLeft, Menu, ChevronDown, Phone, MessageCircle, Mail, Quote, Star, Users, Target, Zap, Search, Smartphone, Wrench, ArrowRight, Store, Briefcase, Building2, HelpCircle, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import { isHTMLElement, getFeatureDefinitions, setFeatureDefinitions, isControllingVariants, isVariantLabel, isMotionValue, isForcedMotionValue, buildHTMLStyles, buildSVGAttrs, isSVGTag, resolveMotionValue, isVariantNode, isAnimationControls, resolveVariantFromProps, scrapeHTMLMotionValuesFromProps, scrapeSVGMotionValuesFromProps, optimizedAppearDataAttribute, SVGVisualElement, HTMLVisualElement, Feature, createAnimationState, isPrimaryPointer, addDomEvent, frame, cancelFrame, frameData, mixNumber, calcLength, createBox, eachAxis, measurePageBox, convertBoxToBoundingBox, convertBoundingBoxToBox, addValueToWillChange, animateMotionValue, setDragLock, percent, isElementTextInput, resize, globalProjectionState, microtask, HTMLProjectionNode, hover, press } from "motion-dom";
import { warning, invariant, warnOnce, pipe, secondsToMilliseconds, millisecondsToSeconds, progress, clamp, noop } from "motion-utils";
import r from "prop-types";
import n from "react-fast-compare";
import i from "invariant";
import o from "shallowequal";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id2 = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id: id2 }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id2 });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id: id2,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id: id2,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id: id2, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id2);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};
const LayoutGroupContext = createContext({});
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
const PresenceContext = /* @__PURE__ */ createContext(null);
const MotionConfigContext = createContext({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i2 = 0; i2 < cleanups.length; i2++) {
          const cleanup = cleanups[i2];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i2], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id2 = useId();
  const ref = useRef(null);
  const size = useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x2 = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y2 = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id2;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x2}px !important;
            ${y2}px !important;
          }
        `);
    }
    return () => {
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : React.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id2 = useId();
  let isReusedContext = true;
  let context = useMemo(() => {
    isReusedContext = false;
    return {
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  useMemo(() => {
    presenceChildren.forEach((_2, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  React.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
function usePresence(subscribe = true) {
  const context = useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id2 = useId();
  useEffect(() => {
    if (subscribe) {
      return register(id2);
    }
  }, [subscribe]);
  const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id2), [id2, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = useRef(true);
  const pendingPresentChildren = useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i2 = 0; i2 < renderedChildren.length; i2++) {
      const key = getChildKey(renderedChildren[i2]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i2 = 0; i2 < renderedChildren.length; i2++) {
      const child = renderedChildren[i2];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i2, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  if (process.env.NODE_ENV !== "production" && mode === "wait" && renderedChildren.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const { forceRender } = useContext(LayoutGroupContext);
  return jsx(Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      exitingComponents.current.add(key);
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
const LazyContext = createContext({ strict: false });
const featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}
function loadFeatures(features) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions);
}
const validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (typeof isValidProp !== "function")
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
const MotionContext = /* @__PURE__ */ createContext({});
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, useContext(MotionContext));
  return useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}
const createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}
const lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component2)
  ) {
    return true;
  }
  return false;
}
function useRender(Component2, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
  const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
  const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
  const elementProps = Component2 !== Fragment$1 ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
  return createElement(Component2, {
    ...elementProps,
    children: renderedChildren
  });
}
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i2 = 0; i2 < list.length; i2++) {
      const resolved = resolveVariantFromProps(props, list[i2]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext(MotionContext);
  const presenceContext = useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
const useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeHTMLMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});
const useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeSVGMotionValuesFromProps,
  createRenderState: createSvgRenderState
});
const motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = useRef(externalRef);
  useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = useRef(null);
  return useCallback((instance) => {
    var _a;
    if (instance) {
      (_a = visualState.onMount) == null ? void 0 : _a.call(visualState, instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref = externalRefContainer.current;
    if (typeof ref === "function") {
      if (instance) {
        const cleanup = ref(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref(instance);
      }
    } else if (ref) {
      ref.current = instance;
    }
  }, [visualElement]);
}
const SwitchLayoutGroupContext = createContext({});
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
  var _a, _b;
  const { visualElement: parent } = useContext(MotionContext);
  const lazyContext = useContext(LazyContext);
  const presenceContext = useContext(PresenceContext);
  const motionConfig = useContext(MotionConfigContext);
  const reducedMotionConfig = motionConfig.reducedMotion;
  const skipAnimations = motionConfig.skipAnimations;
  const visualElementRef = useRef(null);
  const hasMountedOnce = useRef(false);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig,
      skipAnimations,
      isSVG
    });
    if (hasMountedOnce.current && visualElementRef.current) {
      visualElementRef.current.manuallyAnimateOnMount = true;
    }
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = useRef(false);
  useInsertionEffect(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = useRef(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) == null ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect(() => {
    hasMountedOnce.current = true;
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useEffect(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = void 0;
  });
  return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutCrossfade } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    crossfade: layoutCrossfade,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component2);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
    }
    return jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsx(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component2;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = useContext(LazyContext).strict;
  if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  const { drag: drag2, layout: layout2 } = featureDefinitions;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: (drag2 == null ? void 0 : drag2.isEnabled(props)) || (layout2 == null ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component2, options) => {
    return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component2, options) => {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component2, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}
const createDomVisualElement = (Component2, options) => {
  const isSVG = options.isSVG ?? isSVGComponent(Component2);
  return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== Fragment$1
  });
};
class AnimationFeature extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) == null ? void 0 : _a.call(this);
  }
}
let id = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => {
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register, onExitComplete } = this.node.presenceContext || {};
    if (onExitComplete) {
      onExitComplete(this.id);
    }
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
}
const animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
const addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
const getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};
const distance = (a2, b2) => Math.abs(a2 - b2);
function distance2D(a2, b2) {
  const xDelta = distance(a2.x, b2.x);
  const yDelta = distance(a2.y, b2.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
const overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation && resumeAnimation();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    if (element) {
      this.startScrollTracking(element);
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, {
          x: current.scrollLeft,
          y: current.scrollTop
        });
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true,
      passive: true
    });
    window.addEventListener("scroll", this.onWindowScroll, {
      passive: true
    });
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = isWindow ? { x: window.scrollX, y: window.scrollY } : {
      x: target.scrollLeft,
      y: target.scrollTop
    };
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    this.removeScrollListeners && this.removeScrollListeners();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i2 = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i2 >= 0) {
    timestampedPoint = history[i2];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i2--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
const elementDragControls = /* @__PURE__ */ new WeakMap();
class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      distanceThreshold,
      contextWindow: getContextWindow(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(event, panInfo) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end();
    this.panSession = void 0;
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) == null ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        const current = axisValue.get() || 0;
        axisValue.set(point[axis] - mixNumber(min, max, 0.5) + current);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue = this.getAxisMotionValue(axis);
          if (!motionValue)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue.set(motionValue.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
      stopResizeObservers && stopResizeObservers();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls } = this.node.getProps();
    const { dragControls: prevDragControls } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}
let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (prevProps.layoutDependency !== layoutDependency) {
      projection.setOptions({
        ...projection.options,
        layoutDependency
      });
    }
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext(LayoutGroupContext);
  return jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class HoverGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {
  }
}
class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class PressGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    const { globalTapTarget, propagate } = this.node.props;
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: (propagate == null ? void 0 : propagate.tap) === false
    });
  }
  unmount() {
  }
}
const observerCallbacks = /* @__PURE__ */ new WeakMap();
const observers = /* @__PURE__ */ new WeakMap();
const fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
const thresholdNames = {
  some: 0,
  all: 1
};
class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}
const gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};
const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
const motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 1e3 * 60 * 60 * 24 * 30 * 6;
const CONSENT_STORAGE_KEY = "cookie-consent-v1";
const LEGACY_CONSENT_KEY = "cookie-consent-accepted";
const CONSENT_UPDATED_EVENT = "consent-updated";
const CONSENT_OPEN_EVENT = "consent-open-preferences";
function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}
function saveConsent(categories) {
  const record = {
    categories: { necessary: true, analytics: !!categories.analytics },
    timestamp: Date.now(),
    version: CONSENT_VERSION
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record }));
  }
  return record;
}
function hasAnalyticsConsent() {
  var _a;
  return !!((_a = getConsent()) == null ? void 0 : _a.categories.analytics);
}
function openPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
  }
}
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("banner");
  const [analyticsOn, setAnalyticsOn] = useState(false);
  useEffect(() => {
    const current = getConsent();
    if (!current) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    const openHandler = () => {
      const current = getConsent();
      setAnalyticsOn(!!(current == null ? void 0 : current.categories.analytics));
      setView("preferences");
      setIsVisible(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, openHandler);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openHandler);
  }, []);
  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setView("banner"), 300);
  }, []);
  const handleAcceptAll = () => {
    saveConsent({ analytics: true });
    close();
  };
  const handleRejectAll = () => {
    saveConsent({ analytics: false });
    close();
  };
  const handleOpenPreferences = () => {
    const current = getConsent();
    setAnalyticsOn(!!(current == null ? void 0 : current.categories.analytics));
    setView("preferences");
  };
  const handleSavePreferences = () => {
    saveConsent({ analytics: analyticsOn });
    close();
  };
  const handleDismiss = () => {
    saveConsent({ analytics: false });
    close();
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed left-0 right-0 bottom-0 z-50 border-t border-border/30",
      style: {
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "var(--shadow-lg)"
      },
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 40 },
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      children: /* @__PURE__ */ jsxs("div", { className: "container-section py-5 relative", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleDismiss,
            className: "absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-muted/50",
            "aria-label": "Chiudi banner (equivale a rifiuto dei cookie non necessari)",
            type: "button",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
          }
        ),
        view === "banner" ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 pr-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                id: "cookie-banner-title",
                className: "text-base sm:text-lg font-semibold text-foreground mb-1",
                children: "Rispettiamo la tua privacy"
              }
            ),
            /* @__PURE__ */ jsxs(
              "p",
              {
                id: "cookie-banner-description",
                className: "text-sm text-muted-foreground leading-relaxed",
                children: [
                  "Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso, cookie statistici di terze parti (Google Analytics 4) per misurare in forma aggregata come viene utilizzato il sito. Puoi accettare tutti i cookie, rifiutarli o scegliere quali attivare. Il consenso è revocabile in qualsiasi momento.",
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: "/cookie", className: "text-accent hover:underline font-medium", children: "Leggi la Cookie Policy" }),
                  "."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleRejectAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Rifiuta tutti"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleOpenPreferences,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Personalizza"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleAcceptAll,
                className: "btn-primary py-2 px-5 text-sm rounded-xl",
                type: "button",
                children: "Accetta tutti"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 pr-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                id: "cookie-banner-title",
                className: "text-base sm:text-lg font-semibold text-foreground mb-1",
                children: "Preferenze cookie"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                id: "cookie-banner-description",
                className: "text-sm text-muted-foreground leading-relaxed",
                children: "Scegli quali categorie di cookie vuoi abilitare. I cookie tecnici sono sempre attivi in quanto strettamente necessari."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 max-h-[45vh] overflow-y-auto pr-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Cookie tecnici" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Strettamente necessari al funzionamento del sito (memorizzazione del consenso, anti-spam del modulo di contatto). Non richiedono consenso ex art. 122 Codice Privacy." })
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "shrink-0 inline-flex items-center h-6 px-2 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground",
                  "aria-label": "Sempre attivi",
                  children: "Sempre attivi"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4 cursor-pointer", children: [
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Cookie statistici (Google Analytics 4)" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Ci aiutano a capire in forma aggregata come i visitatori utilizzano il sito. IP anonimizzato, dati conservati 14 mesi, trasferimento verso USA con Clausole Contrattuali Standard e Data Privacy Framework." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  role: "switch",
                  "aria-checked": analyticsOn,
                  "aria-label": "Attiva o disattiva cookie statistici",
                  onClick: () => setAnalyticsOn((v2) => !v2),
                  className: `shrink-0 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${analyticsOn ? "bg-accent" : "bg-muted-foreground/30"}`,
                  children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${analyticsOn ? "translate-x-5" : "translate-x-0.5"}`
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleRejectAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Rifiuta tutti"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleAcceptAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Accetta tutti"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleSavePreferences,
                className: "btn-primary py-2 px-5 text-sm rounded-xl sm:ml-auto",
                type: "button",
                children: "Salva preferenze"
              }
            )
          ] })
        ] })
      ] })
    }
  ) });
};
const CookiePreferencesButton = () => {
  const [hasChosen, setHasChosen] = useState(false);
  useEffect(() => {
    setHasChosen(!!getConsent());
    const onUpdate = () => setHasChosen(!!getConsent());
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate);
  }, []);
  if (!hasChosen) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: openPreferences,
      "aria-label": "Gestisci preferenze cookie",
      title: "Gestisci preferenze cookie",
      className: "fixed bottom-4 left-4 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-border/50 text-primary hover:text-accent transition-colors",
      style: {
        background: "var(--glass-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "var(--shadow-md)"
      },
      children: /* @__PURE__ */ jsx(Cookie, { className: "w-5 h-5", "aria-hidden": "true" })
    }
  );
};
const CONCEPT_DEMO_PATHS = [
  "/realizzazioni/demo-metalmeccanica",
  "/realizzazioni/demo-studio-dentistico-premium",
  "/realizzazioni/demo-fotovoltaico",
  "/realizzazioni/boutique-bb-luxury-rooms",
  "/realizzazioni/demo-flower-atelier",
  "/realizzazioni/demo-personal-trainer-vera-method"
];
const TopNotificationBar = () => {
  const { pathname } = useLocation();
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const h2 = el.offsetHeight;
      if (h2 > 0) {
        document.documentElement.style.setProperty(
          "--notification-bar-height",
          `${h2}px`
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--notification-bar-height");
    };
  }, []);
  if (CONCEPT_DEMO_PATHS.includes(pathname)) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "note",
      className: "fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground",
      children: /* @__PURE__ */ jsxs("div", { className: "container-section flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold shrink-0", children: "Consiglio del giorno:" }),
        /* @__PURE__ */ jsx(Lightbulb, { "aria-hidden": "true", className: "w-4 h-4 shrink-0 text-yellow-400" }),
        /* @__PURE__ */ jsx("p", { className: "leading-snug", children: "Proteggi i dati dei tuoi utenti installando un certificato SSL (HTTPS). Google premia i siti web sicuri e gli utenti navigano con più fiducia." })
      ] })
    }
  );
};
function gtagSafe(...args) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}
function clearGaCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = /* @__PURE__ */ new Set();
  domains.add(host);
  domains.add(`.${host}`);
  for (let i2 = 1; i2 < parts.length - 1; i2++) {
    const d2 = parts.slice(i2).join(".");
    domains.add(d2);
    domains.add(`.${d2}`);
  }
  const gaCookieNames = document.cookie.split(";").map((c2) => c2.split("=")[0].trim()).filter((n2) => n2 === "_ga" || n2.startsWith("_ga_") || n2 === "_gid" || n2 === "_gat");
  for (const name of gaCookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
function applyConsent(granted) {
  gtagSafe("consent", "update", {
    analytics_storage: granted ? "granted" : "denied"
  });
  if (granted) {
    gtagSafe("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title
    });
  } else {
    clearGaCookies();
  }
}
let initialized = false;
function initAnalyticsBridge() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  if (hasAnalyticsConsent()) {
    gtagSafe("consent", "update", { analytics_storage: "granted" });
  }
  window.addEventListener(CONSENT_UPDATED_EVENT, (e) => {
    const detail = e.detail;
    const granted = !!(detail == null ? void 0 : detail.categories.analytics);
    applyConsent(granted);
  });
}
function useGaPageview() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasAnalyticsConsent()) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [location.pathname, location.search]);
}
const queryClient = new QueryClient();
const Layout = () => {
  useGaPageview();
  useEffect(() => {
    initAnalyticsBridge();
  }, []);
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster$1, {}),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(TopNotificationBar, {}),
    /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(CookieBanner, {}),
    /* @__PURE__ */ jsx(CookiePreferencesButton, {})
  ] }) });
};
function a() {
  return a = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r2 = arguments[e];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t[n2] = r2[n2]);
    }
    return t;
  }, a.apply(this, arguments);
}
function s(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, c(t, e);
}
function c(t, e) {
  return c = Object.setPrototypeOf || function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, c(t, e);
}
function u(t, e) {
  if (null == t) return {};
  var r2, n2, i2 = {}, o2 = Object.keys(t);
  for (n2 = 0; n2 < o2.length; n2++) e.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = t[r2]);
  return i2;
}
var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, p = { rel: ["amphtml", "canonical", "alternate"] }, f = { type: ["application/ld+json"] }, d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] }, h = Object.keys(l).map(function(t) {
  return l[t];
}), m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, y = Object.keys(m).reduce(function(t, e) {
  return t[m[e]] = e, t;
}, {}), T = function(t, e) {
  for (var r2 = t.length - 1; r2 >= 0; r2 -= 1) {
    var n2 = t[r2];
    if (Object.prototype.hasOwnProperty.call(n2, e)) return n2[e];
  }
  return null;
}, g = function(t) {
  var e = T(t, l.TITLE), r2 = T(t, "titleTemplate");
  if (Array.isArray(e) && (e = e.join("")), r2 && e) return r2.replace(/%s/g, function() {
    return e;
  });
  var n2 = T(t, "defaultTitle");
  return e || n2 || void 0;
}, b = function(t) {
  return T(t, "onChangeClientState") || function() {
  };
}, v = function(t, e) {
  return e.filter(function(e2) {
    return void 0 !== e2[t];
  }).map(function(e2) {
    return e2[t];
  }).reduce(function(t2, e2) {
    return a({}, t2, e2);
  }, {});
}, A = function(t, e) {
  return e.filter(function(t2) {
    return void 0 !== t2[l.BASE];
  }).map(function(t2) {
    return t2[l.BASE];
  }).reverse().reduce(function(e2, r2) {
    if (!e2.length) for (var n2 = Object.keys(r2), i2 = 0; i2 < n2.length; i2 += 1) {
      var o2 = n2[i2].toLowerCase();
      if (-1 !== t.indexOf(o2) && r2[o2]) return e2.concat(r2);
    }
    return e2;
  }, []);
}, C = function(t, e, r2) {
  var n2 = {};
  return r2.filter(function(e2) {
    return !!Array.isArray(e2[t]) || (void 0 !== e2[t] && console && "function" == typeof console.warn && console.warn("Helmet: " + t + ' should be of type "Array". Instead found type "' + typeof e2[t] + '"'), false);
  }).map(function(e2) {
    return e2[t];
  }).reverse().reduce(function(t2, r3) {
    var i2 = {};
    r3.filter(function(t3) {
      for (var r4, o3 = Object.keys(t3), a2 = 0; a2 < o3.length; a2 += 1) {
        var s3 = o3[a2], c3 = s3.toLowerCase();
        -1 === e.indexOf(c3) || "rel" === r4 && "canonical" === t3[r4].toLowerCase() || "rel" === c3 && "stylesheet" === t3[c3].toLowerCase() || (r4 = c3), -1 === e.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r4 = s3);
      }
      if (!r4 || !t3[r4]) return false;
      var u3 = t3[r4].toLowerCase();
      return n2[r4] || (n2[r4] = {}), i2[r4] || (i2[r4] = {}), !n2[r4][u3] && (i2[r4][u3] = true, true);
    }).reverse().forEach(function(e2) {
      return t2.push(e2);
    });
    for (var o2 = Object.keys(i2), s2 = 0; s2 < o2.length; s2 += 1) {
      var c2 = o2[s2], u2 = a({}, n2[c2], i2[c2]);
      n2[c2] = u2;
    }
    return t2;
  }, []).reverse();
}, O = function(t, e) {
  if (Array.isArray(t) && t.length) {
    for (var r2 = 0; r2 < t.length; r2 += 1) if (t[r2][e]) return true;
  }
  return false;
}, S = function(t) {
  return Array.isArray(t) ? t.join("") : t;
}, E = function(t, e) {
  return Array.isArray(t) ? t.reduce(function(t2, r2) {
    return function(t3, e2) {
      for (var r3 = Object.keys(t3), n2 = 0; n2 < r3.length; n2 += 1) if (e2[r3[n2]] && e2[r3[n2]].includes(t3[r3[n2]])) return true;
      return false;
    }(r2, e) ? t2.priority.push(r2) : t2.default.push(r2), t2;
  }, { priority: [], default: [] }) : { default: t };
}, I = function(t, e) {
  var r2;
  return a({}, t, ((r2 = {})[e] = void 0, r2));
}, P = [l.NOSCRIPT, l.SCRIPT, l.STYLE], w = function(t, e) {
  return void 0 === e && (e = true), false === e ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}, x = function(t) {
  return Object.keys(t).reduce(function(e, r2) {
    var n2 = void 0 !== t[r2] ? r2 + '="' + t[r2] + '"' : "" + r2;
    return e ? e + " " + n2 : n2;
  }, "");
}, L = function(t, e) {
  return void 0 === e && (e = {}), Object.keys(t).reduce(function(e2, r2) {
    return e2[m[r2] || r2] = t[r2], e2;
  }, e);
}, j = function(e, r2) {
  return r2.map(function(r3, n2) {
    var i2, o2 = ((i2 = { key: n2 })["data-rh"] = true, i2);
    return Object.keys(r3).forEach(function(t) {
      var e2 = m[t] || t;
      "innerHTML" === e2 || "cssText" === e2 ? o2.dangerouslySetInnerHTML = { __html: r3.innerHTML || r3.cssText } : o2[e2] = r3[t];
    }), React__default.createElement(e, o2);
  });
}, M = function(e, r2, n2) {
  switch (e) {
    case l.TITLE:
      return { toComponent: function() {
        return n3 = r2.titleAttributes, (i2 = { key: e2 = r2.title })["data-rh"] = true, o2 = L(n3, i2), [React__default.createElement(l.TITLE, o2, e2)];
        var e2, n3, i2, o2;
      }, toString: function() {
        return function(t, e2, r3, n3) {
          var i2 = x(r3), o2 = S(e2);
          return i2 ? "<" + t + ' data-rh="true" ' + i2 + ">" + w(o2, n3) + "</" + t + ">" : "<" + t + ' data-rh="true">' + w(o2, n3) + "</" + t + ">";
        }(e, r2.title, r2.titleAttributes, n2);
      } };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: function() {
        return L(r2);
      }, toString: function() {
        return x(r2);
      } };
    default:
      return { toComponent: function() {
        return j(e, r2);
      }, toString: function() {
        return function(t, e2, r3) {
          return e2.reduce(function(e3, n3) {
            var i2 = Object.keys(n3).filter(function(t2) {
              return !("innerHTML" === t2 || "cssText" === t2);
            }).reduce(function(t2, e4) {
              var i3 = void 0 === n3[e4] ? e4 : e4 + '="' + w(n3[e4], r3) + '"';
              return t2 ? t2 + " " + i3 : i3;
            }, ""), o2 = n3.innerHTML || n3.cssText || "", a2 = -1 === P.indexOf(t);
            return e3 + "<" + t + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o2 + "</" + t + ">");
          }, "");
        }(e, r2, n2);
      } };
  }
}, k = function(t) {
  var e = t.baseTag, r2 = t.bodyAttributes, n2 = t.encode, i2 = t.htmlAttributes, o2 = t.noscriptTags, a2 = t.styleTags, s2 = t.title, c2 = void 0 === s2 ? "" : s2, u2 = t.titleAttributes, h2 = t.linkTags, m2 = t.metaTags, y2 = t.scriptTags, T2 = { toComponent: function() {
  }, toString: function() {
    return "";
  } };
  if (t.prioritizeSeoTags) {
    var g2 = function(t2) {
      var e2 = t2.linkTags, r3 = t2.scriptTags, n3 = t2.encode, i3 = E(t2.metaTags, d), o3 = E(e2, p), a3 = E(r3, f);
      return { priorityMethods: { toComponent: function() {
        return [].concat(j(l.META, i3.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
      }, toString: function() {
        return M(l.META, i3.priority, n3) + " " + M(l.LINK, o3.priority, n3) + " " + M(l.SCRIPT, a3.priority, n3);
      } }, metaTags: i3.default, linkTags: o3.default, scriptTags: a3.default };
    }(t);
    T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
  }
  return { priority: T2, base: M(l.BASE, e, n2), bodyAttributes: M("bodyAttributes", r2, n2), htmlAttributes: M("htmlAttributes", i2, n2), link: M(l.LINK, h2, n2), meta: M(l.META, m2, n2), noscript: M(l.NOSCRIPT, o2, n2), script: M(l.SCRIPT, y2, n2), style: M(l.STYLE, a2, n2), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n2) };
}, H = [], N = function(t, e) {
  var r2 = this;
  void 0 === e && (e = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: function(t2) {
    r2.context.helmet = t2;
  }, helmetInstances: { get: function() {
    return r2.canUseDOM ? H : r2.instances;
  }, add: function(t2) {
    (r2.canUseDOM ? H : r2.instances).push(t2);
  }, remove: function(t2) {
    var e2 = (r2.canUseDOM ? H : r2.instances).indexOf(t2);
    (r2.canUseDOM ? H : r2.instances).splice(e2, 1);
  } } }, this.context = t, this.canUseDOM = e, e || (t.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, R = React__default.createContext({}), D = r.shape({ setHelmet: r.func, helmetInstances: r.shape({ get: r.func, add: r.func, remove: r.func }) }), U = "undefined" != typeof document, q = /* @__PURE__ */ function(e) {
  function r2(t) {
    var n2;
    return (n2 = e.call(this, t) || this).helmetData = new N(n2.props.context, r2.canUseDOM), n2;
  }
  return s(r2, e), r2.prototype.render = function() {
    return React__default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
  }, r2;
}(Component);
q.canUseDOM = U, q.propTypes = { context: r.shape({ helmet: r.shape() }), children: r.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
var Y = function(t, e) {
  var r2, n2 = document.head || document.querySelector(l.HEAD), i2 = n2.querySelectorAll(t + "[data-rh]"), o2 = [].slice.call(i2), a2 = [];
  return e && e.length && e.forEach(function(e2) {
    var n3 = document.createElement(t);
    for (var i3 in e2) Object.prototype.hasOwnProperty.call(e2, i3) && ("innerHTML" === i3 ? n3.innerHTML = e2.innerHTML : "cssText" === i3 ? n3.styleSheet ? n3.styleSheet.cssText = e2.cssText : n3.appendChild(document.createTextNode(e2.cssText)) : n3.setAttribute(i3, void 0 === e2[i3] ? "" : e2[i3]));
    n3.setAttribute("data-rh", "true"), o2.some(function(t2, e3) {
      return r2 = e3, n3.isEqualNode(t2);
    }) ? o2.splice(r2, 1) : a2.push(n3);
  }), o2.forEach(function(t2) {
    return t2.parentNode.removeChild(t2);
  }), a2.forEach(function(t2) {
    return n2.appendChild(t2);
  }), { oldTags: o2, newTags: a2 };
}, B = function(t, e) {
  var r2 = document.getElementsByTagName(t)[0];
  if (r2) {
    for (var n2 = r2.getAttribute("data-rh"), i2 = n2 ? n2.split(",") : [], o2 = [].concat(i2), a2 = Object.keys(e), s2 = 0; s2 < a2.length; s2 += 1) {
      var c2 = a2[s2], u2 = e[c2] || "";
      r2.getAttribute(c2) !== u2 && r2.setAttribute(c2, u2), -1 === i2.indexOf(c2) && i2.push(c2);
      var l2 = o2.indexOf(c2);
      -1 !== l2 && o2.splice(l2, 1);
    }
    for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1) r2.removeAttribute(o2[p2]);
    i2.length === o2.length ? r2.removeAttribute("data-rh") : r2.getAttribute("data-rh") !== a2.join(",") && r2.setAttribute("data-rh", a2.join(","));
  }
}, K = function(t, e) {
  var r2 = t.baseTag, n2 = t.htmlAttributes, i2 = t.linkTags, o2 = t.metaTags, a2 = t.noscriptTags, s2 = t.onChangeClientState, c2 = t.scriptTags, u2 = t.styleTags, p2 = t.title, f2 = t.titleAttributes;
  B(l.BODY, t.bodyAttributes), B(l.HTML, n2), function(t2, e2) {
    void 0 !== t2 && document.title !== t2 && (document.title = S(t2)), B(l.TITLE, e2);
  }(p2, f2);
  var d2 = { baseTag: Y(l.BASE, r2), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
  Object.keys(d2).forEach(function(t2) {
    var e2 = d2[t2], r3 = e2.newTags, n3 = e2.oldTags;
    r3.length && (h2[t2] = r3), n3.length && (m2[t2] = d2[t2].oldTags);
  }), e && e(), s2(t, h2, m2);
}, _ = null, z = /* @__PURE__ */ function(t) {
  function e() {
    for (var e2, r3 = arguments.length, n2 = new Array(r3), i2 = 0; i2 < r3; i2++) n2[i2] = arguments[i2];
    return (e2 = t.call.apply(t, [this].concat(n2)) || this).rendered = false, e2;
  }
  s(e, t);
  var r2 = e.prototype;
  return r2.shouldComponentUpdate = function(t2) {
    return !o(t2, this.props);
  }, r2.componentDidUpdate = function() {
    this.emitChange();
  }, r2.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r2.emitChange = function() {
    var t2, e2, r3 = this.props.context, n2 = r3.setHelmet, i2 = null, o2 = (t2 = r3.helmetInstances.get().map(function(t3) {
      var e3 = a({}, t3.props);
      return delete e3.context, e3;
    }), { baseTag: A(["href"], t2), bodyAttributes: v("bodyAttributes", t2), defer: T(t2, "defer"), encode: T(t2, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t2), linkTags: C(l.LINK, ["rel", "href"], t2), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t2), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t2), onChangeClientState: b(t2), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t2), styleTags: C(l.STYLE, ["cssText"], t2), title: g(t2), titleAttributes: v("titleAttributes", t2), prioritizeSeoTags: O(t2, "prioritizeSeoTags") });
    q.canUseDOM ? (e2 = o2, _ && cancelAnimationFrame(_), e2.defer ? _ = requestAnimationFrame(function() {
      K(e2, function() {
        _ = null;
      });
    }) : (K(e2), _ = null)) : k && (i2 = k(o2)), n2(i2);
  }, r2.init = function() {
    this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r2.render = function() {
    return this.init(), null;
  }, e;
}(Component);
z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
var F = ["children"], G = ["children"], W = /* @__PURE__ */ function(e) {
  function r2() {
    return e.apply(this, arguments) || this;
  }
  s(r2, e);
  var o2 = r2.prototype;
  return o2.shouldComponentUpdate = function(t) {
    return !n(I(this.props, "helmetData"), I(t, "helmetData"));
  }, o2.mapNestedChildrenToProps = function(t, e2) {
    if (!e2) return null;
    switch (t.type) {
      case l.SCRIPT:
      case l.NOSCRIPT:
        return { innerHTML: e2 };
      case l.STYLE:
        return { cssText: e2 };
      default:
        throw new Error("<" + t.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o2.flattenArrayTypeChildren = function(t) {
    var e2, r3 = t.child, n2 = t.arrayTypeChildren;
    return a({}, n2, ((e2 = {})[r3.type] = [].concat(n2[r3.type] || [], [a({}, t.newChildProps, this.mapNestedChildrenToProps(r3, t.nestedChildren))]), e2));
  }, o2.mapObjectTypeChildren = function(t) {
    var e2, r3, n2 = t.child, i2 = t.newProps, o3 = t.newChildProps, s2 = t.nestedChildren;
    switch (n2.type) {
      case l.TITLE:
        return a({}, i2, ((e2 = {})[n2.type] = s2, e2.titleAttributes = a({}, o3), e2));
      case l.BODY:
        return a({}, i2, { bodyAttributes: a({}, o3) });
      case l.HTML:
        return a({}, i2, { htmlAttributes: a({}, o3) });
      default:
        return a({}, i2, ((r3 = {})[n2.type] = a({}, o3), r3));
    }
  }, o2.mapArrayTypeChildrenToProps = function(t, e2) {
    var r3 = a({}, e2);
    return Object.keys(t).forEach(function(e3) {
      var n2;
      r3 = a({}, r3, ((n2 = {})[e3] = t[e3], n2));
    }), r3;
  }, o2.warnOnInvalidChildren = function(t, e2) {
    return i(h.some(function(e3) {
      return t.type === e3;
    }), "function" == typeof t.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t.type + "> elements. Refer to our API for more information."), i(!e2 || "string" == typeof e2 || Array.isArray(e2) && !e2.some(function(t2) {
      return "string" != typeof t2;
    }), "Helmet expects a string as a child of <" + t.type + ">. Did you forget to wrap your children in braces? ( <" + t.type + ">{``}</" + t.type + "> ) Refer to our API for more information."), true;
  }, o2.mapChildrenToProps = function(e2, r3) {
    var n2 = this, i2 = {};
    return React__default.Children.forEach(e2, function(t) {
      if (t && t.props) {
        var e3 = t.props, o3 = e3.children, a2 = u(e3, F), s2 = Object.keys(a2).reduce(function(t2, e4) {
          return t2[y[e4] || e4] = a2[e4], t2;
        }, {}), c2 = t.type;
        switch ("symbol" == typeof c2 ? c2 = c2.toString() : n2.warnOnInvalidChildren(t, o3), c2) {
          case l.FRAGMENT:
            r3 = n2.mapChildrenToProps(o3, r3);
            break;
          case l.LINK:
          case l.META:
          case l.NOSCRIPT:
          case l.SCRIPT:
          case l.STYLE:
            i2 = n2.flattenArrayTypeChildren({ child: t, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o3 });
            break;
          default:
            r3 = n2.mapObjectTypeChildren({ child: t, newProps: r3, newChildProps: s2, nestedChildren: o3 });
        }
      }
    }), this.mapArrayTypeChildrenToProps(i2, r3);
  }, o2.render = function() {
    var e2 = this.props, r3 = e2.children, n2 = u(e2, G), i2 = a({}, n2), o3 = n2.helmetData;
    return r3 && (i2 = this.mapChildrenToProps(r3, i2)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? /* @__PURE__ */ React__default.createElement(z, a({}, i2, { context: o3.value, helmetData: void 0 })) : /* @__PURE__ */ React__default.createElement(R.Consumer, null, function(e3) {
      return React__default.createElement(z, a({}, i2, { context: e3 }));
    });
  }, r2;
}(Component);
W.propTypes = { base: r.object, bodyAttributes: r.object, children: r.oneOfType([r.arrayOf(r.node), r.node]), defaultTitle: r.string, defer: r.bool, encodeSpecialCharacters: r.bool, htmlAttributes: r.object, link: r.arrayOf(r.object), meta: r.arrayOf(r.object), noscript: r.arrayOf(r.object), onChangeClientState: r.func, script: r.arrayOf(r.object), style: r.arrayOf(r.object), title: r.string, titleAttributes: r.object, titleTemplate: r.string, prioritizeSeoTags: r.bool, helmetData: r.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Siti web", href: "/#sitiweb" },
  { label: "Realizzazioni", href: "/realizzazioni" },
  { label: "SEO & AI", href: "/posizionamento-google-e-ai" },
  { label: "Google ADS", href: "/pubblicita-google-ads" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq-realizzazione-siti-web" },
  { label: "Contatti", href: "/contatti" }
];
const Header = ({ satelliteMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith("/blog/") && pathname !== "/blog";
  const backLinkClass = `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
  const mobileBackLinkClass = `inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href) => {
    setIsOpen(false);
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const styles = getComputedStyle(document.documentElement);
      const headerHeight = parseFloat(styles.getPropertyValue("--header-height")) * 16 || 72;
      const barRaw = styles.getPropertyValue("--notification-bar-height");
      const barHeight = barRaw ? parseFloat(barRaw) * 16 : 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - barHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "border-b border-border/30" : "bg-transparent"}`,
      style: {
        height: "var(--header-height)",
        top: "var(--notification-bar-height)",
        ...isScrolled ? {
          background: "var(--glass-bg)",
          backdropFilter: `blur(${isScrolled ? "20px" : "0px"})`,
          WebkitBackdropFilter: `blur(${isScrolled ? "20px" : "0px"})`,
          boxShadow: "var(--shadow-sm)"
        } : {}
      },
      children: /* @__PURE__ */ jsxs("nav", { className: "container-section h-full flex items-center justify-between", "aria-label": "Navigazione principale", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", "aria-label": "Vai alla home", className: "font-serif text-xl font-semibold text-foreground flex items-center gap-2.5 rounded-lg hover:opacity-90 transition-opacity", children: [
          /* @__PURE__ */ jsx("img", { alt: "4 Web Lab logo", className: "w-9 h-9 rounded-lg object-contain", src: "/logo.webp", width: 36, height: 36, decoding: "async" }),
          /* @__PURE__ */ jsx("span", { className: `transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground lg:text-foreground"}`, children: "4 Web Lab" })
        ] }),
        satelliteMode ? /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
          isBlogArticle && /* @__PURE__ */ jsxs(Link, { to: "/blog", className: backLinkClass, children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Torna agli articoli"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/", className: backLinkClass, children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Torna alla Home"
          ] })
        ] }) : /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => {
          const isRoute = item.href.startsWith("/");
          const isActive = !isRoute && activeSection === item.href.substring(1);
          const baseClass = `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${isActive ? "text-accent-foreground" : isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
          const activeStyle = isActive ? { background: "var(--gradient-accent)", boxShadow: "0 2px 8px hsl(207 90% 54% / 0.25)" } : {};
          return /* @__PURE__ */ jsx("li", { children: isRoute ? /* @__PURE__ */ jsx(Link, { to: item.href, className: baseClass, style: activeStyle, children: item.label }) : /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              onClick: (e) => {
                e.preventDefault();
                handleNavClick(item.href);
              },
              className: baseClass,
              style: activeStyle,
              "aria-current": isActive ? "page" : void 0,
              children: item.label
            }
          ) }, item.href);
        }) }),
        satelliteMode ? /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
          isBlogArticle && /* @__PURE__ */ jsxs(Link, { to: "/blog", className: mobileBackLinkClass, children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Torna agli articoli"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/", className: mobileBackLinkClass, children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Torna alla Home"
          ] })
        ] }) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "lg:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-colors",
            onClick: () => setIsOpen(!isOpen),
            "aria-expanded": isOpen,
            "aria-controls": "mobile-menu",
            "aria-label": isOpen ? "Chiudi menu" : "Apri menu",
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: `w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}` }) : /* @__PURE__ */ jsx(Menu, { className: `w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}` })
          }
        ),
        isOpen && !satelliteMode && /* @__PURE__ */ jsx(
          "div",
          {
            id: "mobile-menu",
            className: "absolute top-full left-0 right-0 lg:hidden border-b border-border/30 bg-background/95",
            style: {
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "var(--shadow-lg)"
            },
            children: /* @__PURE__ */ jsx("ul", { className: "container-section py-4 flex flex-col gap-1", children: navItems.map((item) => {
              const isRoute = item.href.startsWith("/");
              const isActive = !isRoute && activeSection === item.href.substring(1);
              const cls = `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted/60"}`;
              return /* @__PURE__ */ jsx("li", { children: isRoute ? /* @__PURE__ */ jsx(Link, { to: item.href, className: cls, onClick: () => setIsOpen(false), children: item.label }) : /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  onClick: (e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  },
                  className: cls,
                  "aria-current": isActive ? "page" : void 0,
                  children: item.label
                }
              ) }, item.href);
            }) })
          }
        )
      ] })
    }
  );
};
const HeroScrollTransition = () => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("div", { className: "scroll-indicator flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background/90 border border-accent/30 shadow-accent/30 shadow-lg backdrop-blur-md", children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-6 h-6 text-accent", strokeWidth: 2.5 }) })
    }
  );
};
const heroBgMobile = "/hero/hero-bg-mobile.webp";
const heroBgTablet = "/hero/hero-bg-tablet.webp";
const heroBgDesktop = "/hero/hero-bg-desktop.webp";
const whatsappNumber$1 = "393514656042";
const whatsappMessage$1 = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");
const Hero = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber$1}?text=${whatsappMessage$1}`;
  const handleScrollToContact = () => {
    const element = document.getElementById("contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative flex items-center justify-center overflow-hidden",
      style: {
        background: "var(--gradient-hero)",
        minHeight: "calc(100svh - var(--header-height) - var(--notification-bar-height, 0px))",
        paddingTop: "calc(var(--header-height) + var(--notification-bar-height, 0px))"
      },
      children: [
        /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx("source", { media: "(max-width: 640px)", srcSet: heroBgMobile, type: "image/webp" }),
          /* @__PURE__ */ jsx("source", { media: "(max-width: 1280px)", srcSet: heroBgTablet, type: "image/webp" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroBgDesktop,
              alt: "Mappa astratta del Veneto con rete di nodi luminosi e linee dati che convergono su Padova — 4 Web Lab, web agency SEO e siti web a Padova",
              width: 1920,
              height: 1070,
              fetchPriority: "high",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover object-left sm:object-center"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(to right, hsl(210 73% 10% / 0.68) 0%, hsl(210 73% 10% / 0.42) 45%, hsl(210 73% 10% / 0.10) 75%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container-section relative z-10 py-24", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-left", children: [
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "heading-1 text-primary-foreground mb-8 text-balance",
                style: {
                  textShadow: "0 2px 8px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.25)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em"
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[0.6em] tracking-wide font-semibold opacity-90 sm:whitespace-nowrap uppercase", children: "SOLUZIONI SU MISURA E ACCESSIBILI" }),
                  /* @__PURE__ */ jsx("span", { className: "block my-3 sm:my-4 sm:whitespace-nowrap", children: "WEB AGENCY PADOVA" }),
                  /* @__PURE__ */ jsx("span", { className: "block text-[0.6em] tracking-wide font-semibold opacity-90 sm:whitespace-nowrap", children: "SITI WEB, SEO, GOOGLE ADS, BRANDING" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "body-large text-primary-foreground mb-14 text-balance",
                style: { textShadow: "0 1px 4px rgba(0,0,0,0.5)" },
                children: "Ottimizzazione e posizionamento sui motori di ricerca per intercettare clienti qualificati. Sviluppo di siti web veloci, ottimizzati per i dispositivi mobili e pronti per l'AI, per dare visibilità concreta alla tua attività."
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start gap-5", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleScrollToContact,
                  className: "hero-cta hero-cta-primary",
                  "aria-label": "Richiedi un preventivo gratuito",
                  children: "Richiedi preventivo gratuito"
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: whatsappUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hero-cta hero-cta-whatsapp",
                  "aria-label": "Scrivici su WhatsApp",
                  children: [
                    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", role: "img", "aria-label": "WhatsApp", className: "w-6 h-6", children: [
                      /* @__PURE__ */ jsx("circle", { cx: "256", cy: "256", r: "256", fill: "#25D366" }),
                      /* @__PURE__ */ jsx("path", { fill: "#FFFFFF", d: "M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" })
                    ] }),
                    "Scrivi su WhatsApp"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(HeroScrollTransition, {})
        ] })
      ]
    }
  );
};
const businessInfo = {
  name: "4 Web Lab",
  fullName: "4 Web Lab di Fullin Carlo",
  vatNumber: "P.IVA: 05765760284",
  address: "Via Belluno 44",
  city: "Legnaro (PD)",
  postalCode: "35020",
  country: "Italia",
  phone: "+39 351 465 6042",
  whatsapp: "393514656042",
  email: "info@4weblab.it"
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-primary text-primary-foreground py-16 md:pb-16 pb-[calc(var(--mobile-cta-height)+1rem)]", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity duration-300", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "4 Web Lab logo",
              className: "w-10 h-10 rounded-xl object-contain",
              src: "/logo.webp",
              width: 40,
              height: 40,
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-xl font-bold", children: businessInfo.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/60 leading-relaxed text-sm", children: "Studio di soluzioni web per negozi, professionisti ed aziende con sede a Padova. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione per attività in tutta Italia." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Soluzioni" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Negozi" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Professionisti" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Aziende" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Esplora" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "SEO & AI" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Google ADS" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq-realizzazione-siti-web", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Domande Frequenti (FAQ)" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Contatti" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+393514656042",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: "+39 351 465 6042" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/${businessInfo.whatsapp}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: "WhatsApp" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: "info@4weblab.it" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-primary-foreground/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-x-4 gap-y-1 text-sm text-primary-foreground/45", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          currentYear,
          " ",
          businessInfo.name,
          ". Tutti i diritti riservati."
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline text-primary-foreground/25", children: "|" }),
        /* @__PURE__ */ jsxs("span", { children: [
          businessInfo.fullName,
          " — ",
          businessInfo.vatNumber
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/cookie", className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4", children: "Cookie Policy" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: openPreferences,
            className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
            children: "Gestisci cookie"
          }
        )
      ] })
    ] })
  ] }) });
};
const getVariants = (direction, distance2 = 40) => {
  const initial = { opacity: 0 };
  if (direction === "up") initial.y = distance2;
  if (direction === "down") initial.y = -distance2;
  if (direction === "left") initial.x = distance2;
  if (direction === "right") initial.x = -distance2;
  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  };
};
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-60px" },
      variants: getVariants(direction),
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
      children
    }
  );
};
const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-60px" },
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
      children
    }
  );
};
const StaggerItem = ({
  children,
  className = "",
  direction = "up"
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      variants: getVariants(direction, 30),
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      children
    }
  );
};
const testimonials = [
  {
    name: "Mattia Loreggian",
    initial: "M",
    text: "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque."
  },
  {
    name: "Jessica Trovò",
    initial: "J",
    text: "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova."
  },
  {
    name: "Lisa Bogana",
    initial: "L",
    text: "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero."
  }
];
const cards$1 = [{
  icon: Users,
  title: "Approccio Personale",
  description: "Lavoriamo fianco a fianco con te. Parli direttamente con chi sviluppa il tuo sito, senza intermediari o sistemi a ticket."
}, {
  icon: Target,
  title: "Orientati ai Risultati",
  description: "Non solo estetica: ogni linea di codice e di copy è progettata per intercettare i clienti e convertire i visitatori in contatti reali."
}, {
  icon: Lightbulb,
  title: "Design Sartoriale (Zero Template)",
  description: "Nessun modello pre-fatto o stampino. Il tuo brand riceve un design esclusivo, flessibile e cucito al millimetro sulle tue necessità."
}];
const guarantees = [
  {
    label: "Tempi certi e zero attese",
    text: "Analisi, sviluppo e pubblicazione in 2-4 settimane, con gestione diretta da remoto."
  },
  {
    label: "Tecnologia e Performance",
    text: "Siti web statici ultra-veloci ospitati su hosting Netlify. Massima sicurezza, zero canoni nascosti."
  },
  {
    label: "Casi reali, non solo demo",
    text: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Guarda il restyling completo di ",
      /* @__PURE__ */ jsx(Link, { to: "/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto", className: "text-accent hover:underline font-medium", children: "R.B. s.n.c." }),
      " o naviga tutti i nostri ",
      /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "concept e realizzazioni" }),
      "."
    ] })
  }
];
const AboutSection = () => {
  return /* @__PURE__ */ jsx("section", { id: "chi-siamo", className: "section-padding bg-surface-alt", style: { scrollMarginTop: "var(--header-height)" }, children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-14 md:mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-5", children: "Il web si è evoluto. Il tuo sito è pronto per le AI?" }),
      /* @__PURE__ */ jsxs("p", { className: "aeo-answer body-large text-muted-foreground max-w-3xl mx-auto text-balance", children: [
        /* @__PURE__ */ jsx("strong", { children: "4 Web Lab" }),
        " è uno studio web con sede a ",
        /* @__PURE__ */ jsx(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent hover:underline font-medium", children: "Padova" }),
        " che realizza siti professionali, ",
        /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "SEO per Google e per le AI" }),
        " (ChatGPT, Gemini, Perplexity) e ",
        /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "campagne Google Ads" }),
        " per negozi, professionisti e PMI in tutta Italia."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs(AnimatedSection, { className: "md:pt-2", direction: "left", children: [
        /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Le garanzie tecniche" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: guarantees.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("strong", { className: "text-foreground", children: [
              item.label,
              ":"
            ] }),
            " ",
            item.text
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsx(StaggerContainer, { className: "grid gap-4", staggerDelay: 0.12, children: cards$1.map((card, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass flex items-start gap-5 group hover:-translate-y-1.5 transition-all duration-400", children: [
        /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13 flex-shrink-0", children: /* @__PURE__ */ jsx(card.icon, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-lg mb-1.5", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: card.description })
        ] })
      ] }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mt-20 mb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx("h3", { className: "heading-3 mb-2", children: "La parola a chi ha scelto 4 Web Lab" }),
      /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: "Storie di business reali. Risultati concreti, codice su misura e nessuna promessa campata in aria." })
    ] }),
    /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6", staggerDelay: 0.12, children: testimonials.map((t, i2) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-400 h-full flex flex-col", children: [
      /* @__PURE__ */ jsx(Quote, { className: "absolute top-4 right-4 w-8 h-8 text-accent/15" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 mb-4", children: [...Array(5)].map((_2, s2) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, s2)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed italic mb-6 flex-1", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0", children: t.initial }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: t.name })
      ] })
    ] }) }, i2)) }),
    /* @__PURE__ */ jsx(AnimatedSection, { className: "text-center mt-8", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://maps.app.goo.gl/FQ8UkcNRm8YHWq8LA",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors",
        children: "Leggi tutte le recensioni su Google →"
      }
    ) })
  ] }) });
};
const strengths = [
  {
    icon: Zap,
    title: "Performance elevate",
    description: "Realizziamo siti web ultra-veloci  e ottimizzati secondo i rigidi standard Core Web Vitals di Google. Un sito rapido non solo offre un'esperienza d'uso fluida e piacevole per i tuoi clienti, ma si posiziona meglio sui motori di ricerca, trasformando i semplici visitatori in contatti concreti per la tua attività."
  },
  {
    icon: Search,
    title: "SEO e visibilità AI",
    description: "Ottimizzazione per Google e per le AI (ChatGPT, Gemini, Perplexity): farti trovare, ovunque cerchino. I tuoi clienti stanno già cercando soluzioni su Gemini o ChatGPT. Progettiamo un'architettura semantica avanzata che posiziona il tuo brand come fonte ufficiale e attendibile, convertendo le ricerche assistite dall'AI in lead reali per il tuo business."
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Progettazione mobile-first: il sito funziona perfettamente dove i tuoi clienti lo guardano davvero."
  },
  {
    icon: Wrench,
    title: "Supporto dedicato",
    description: "Un referente diretto, niente ticket impersonali: rispondiamo a te, sul tuo progetto."
  }
];
const BentoCard = ({
  strength,
  index,
  className = "",
  featured = false
}) => {
  const number = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ jsx(StaggerItem, { className, children: /* @__PURE__ */ jsxs("article", { className: "group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.18)] md:p-8", children: [
    /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-4 top-2 font-sans text-6xl font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/[0.08] md:text-7xl", children: number }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-full flex-col", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/10 transition-transform duration-500 group-hover:scale-105 ${featured ? "h-16 w-16" : "h-12 w-12"}`,
          children: /* @__PURE__ */ jsx(
            strength.icon,
            {
              className: `text-white ${featured ? "h-8 w-8" : "h-6 w-6"}`,
              "aria-hidden": "true"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "h3",
        {
          className: `font-sans font-bold mb-3 ${featured ? "text-2xl md:text-3xl" : "text-lg"}`,
          children: strength.title
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: `leading-relaxed text-muted-foreground ${featured ? "text-base md:text-lg max-w-md" : "text-sm"}`,
          children: strength.description
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-70" })
  ] }) });
};
const StrengthsSection = () => {
  return /* @__PURE__ */ jsx("section", { id: "punti-di-forza", className: "section-padding bg-surface-alt-2", style: { scrollMarginTop: "var(--header-height)" }, children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-5", children: "Perché scegliere la nostra agenzia web" }),
      /* @__PURE__ */ jsxs("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: [
        "Supportiamo ",
        /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-accent hover:underline font-medium", children: "professionisti" }),
        ", ",
        /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "text-accent hover:underline font-medium", children: "negozi" }),
        " e ",
        /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "text-accent hover:underline font-medium", children: "piccole e medie imprese" }),
        " in tutta Italia nella realizzazione di siti web professionali orientati alla crescita online."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      StaggerContainer,
      {
        className: "grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2",
        staggerDelay: 0.1,
        children: [
          /* @__PURE__ */ jsx(
            BentoCard,
            {
              strength: strengths[0],
              index: 0,
              featured: true,
              className: "md:col-span-2 md:row-span-2"
            }
          ),
          /* @__PURE__ */ jsx(
            BentoCard,
            {
              strength: strengths[1],
              index: 1,
              className: "md:col-span-2"
            }
          ),
          /* @__PURE__ */ jsx(
            BentoCard,
            {
              strength: strengths[2],
              index: 2,
              className: "md:col-span-1"
            }
          ),
          /* @__PURE__ */ jsx(
            BentoCard,
            {
              strength: strengths[3],
              index: 3,
              className: "md:col-span-1"
            }
          )
        ]
      }
    )
  ] }) });
};
const cardNegozio = "/assets/card-negozio-B7U3Pp4a.webp";
const cardProfessionista = "/assets/card-professionista-dBM77kXu.webp";
const cardAzienda = "/assets/card-azienda-CGbsSXVV.webp";
const cards = [
  {
    title: "Ho un negozio",
    text: "Sito chiaro, veloce e ottimizzato per Google Maps e ricerche locali. A partire da 199€.",
    cta: "Scopri i siti per negozi",
    link: "/siti-web-per-negozi",
    image: cardNegozio,
    imageAlt: "Vetrina di un negozio locale con prodotti esposti",
    icon: Store
  },
  {
    title: "Sono un professionista",
    text: "Dall'avvocato all'elettricista: il sito che costruisce credibilità e porta nuovi contatti. Da 549€.",
    cta: "Scopri i siti per professionisti",
    link: "/siti-web-per-professionisti",
    image: cardProfessionista,
    imageAlt: "Professionista al lavoro in uno studio mentre consulta il computer",
    icon: Briefcase
  },
  {
    title: "Ho un'azienda",
    text: "Siti aziendali per PMI: visibilità, autorevolezza e generazione di lead misurabili. Da 899€.",
    cta: "Scopri i siti aziendali",
    link: "/siti-web-aziendali",
    image: cardAzienda,
    imageAlt: "Team aziendale in riunione in un ambiente di lavoro moderno",
    icon: Building2
  }
];
const UserRoutingSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-28 md:py-36 bg-surface-alt relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("span", { id: "sitiweb", "aria-hidden": "true", className: "block relative -top-24" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "32px 32px" } }),
    /* @__PURE__ */ jsxs("div", { className: "container-section relative", children: [
      /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "section-divider" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-5", children: "Servizi web e soluzioni sartoriali per il tuo business" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: "Ogni attività ha esigenze e regole diverse. Scegli il tuo profilo e scopri l'architettura web più adatta per scalare il tuo mercato." })
      ] }),
      /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", staggerDelay: 0.15, delay: 0.2, children: cards.map((card) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: card.link,
            className: "group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[420px] md:min-h-[480px]",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: card.image,
                  alt: card.imageAlt,
                  loading: "lazy",
                  width: 800,
                  height: 512,
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col justify-end p-8 md:p-9", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3 mt-auto", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent/80 transition-colors duration-500 shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-white", "aria-hidden": "true" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-white", children: card.title })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-white/85 text-base leading-relaxed mb-6 max-w-sm min-h-[8rem] md:min-h-[9rem]", children: card.text }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-white font-semibold text-base group-hover:gap-3 transition-all duration-300", children: [
                  card.cta,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1", "aria-hidden": "true" })
                ] })
              ] })
            ]
          }
        ) }, card.link);
      }) })
    ] })
  ] });
};
const previewFaqs = [
  {
    question: "Quanto costa realizzare un sito web?",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: 'Leggi "Quanto costa un sito web nel 2026?"' })
    ] })
  },
  {
    question: "In quanto tempo viene realizzato un sito web?",
    answer: "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali."
  },
  {
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Scopri come funziona il posizionamento su Google e AI →" })
    ] })
  }
];
const HomeFaqPreview = () => {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box w-11 h-11", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-5 h-5 text-accent-foreground", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Domande frequenti sulla realizzazione siti web" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mb-10 max-w-xl", children: "Le domande più comuni su costi, tempi e scelte strategiche per la realizzazione di un sito web." }),
    /* @__PURE__ */ jsx("div", { className: "space-y-5 mb-10", children: previewFaqs.map((faq, i2) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-5 rounded-2xl border border-border bg-background hover:border-accent/20 hover:bg-accent/2 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1.5 text-base", children: faq.question }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm leading-relaxed", children: faq.answer })
        ]
      },
      i2
    )) }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/faq-realizzazione-siti-web",
        className: "inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition-colors duration-300 group",
        children: [
          "Leggi tutte le domande frequenti (FAQ)",
          /* @__PURE__ */ jsx(
            ArrowRight,
            {
              className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
              "aria-hidden": "true"
            }
          )
        ]
      }
    )
  ] }) }) });
};
function ContactFormWeb3Forms() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAtRef = useRef(Date.now());
  const formRef = useRef(null);
  const RATE_LIMIT_MS = 6e4;
  const RL_KEY = "w3f_last_submit_ts";
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);
  const clearFieldError = (field) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };
  const onSubmit = async (event) => {
    var _a;
    event.preventDefault();
    if (status.state === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const businessType = String(formData.get("business_type") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name) errors.name = "Campo obbligatorio";
    if (!email) errors.email = "Inserisci un indirizzo email valido";
    if (!businessType) errors.business_type = "Seleziona un'opzione";
    if (!message) errors.message = "Raccontaci qualcosa del tuo progetto";
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstKey = Object.keys(errors)[0];
      const firstInput = (_a = formRef.current) == null ? void 0 : _a.querySelector(`[data-field="${firstKey}"]`);
      if (firstInput) {
        firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInput.focus();
      }
      return;
    }
    const elapsed = Date.now() - mountedAtRef.current;
    if (elapsed < 3e3) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }
    try {
      const last = Number(localStorage.getItem(RL_KEY) || "0");
      if (Date.now() - last < RATE_LIMIT_MS) {
        setStatus({ state: "error", message: "Hai già inviato da poco. Riprova tra 1 minuto." });
        return;
      }
    } catch {
    }
    if (formData.get("website") || formData.get("fax")) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nuova richiesta di analisi gratuita dal sito");
    setStatus({ state: "sending", message: "Invio in corso..." });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      let data = null;
      try {
        data = await response.json();
      } catch {
      }
      if (!response.ok || !(data == null ? void 0 : data.success)) {
        setStatus({ state: "error", message: "Invio non riuscito. Riprova tra poco." });
        return;
      }
      try {
        localStorage.setItem(RL_KEY, String(Date.now()));
      } catch {
      }
      setStatus({ state: "success", message: "Messaggio inviato. Ti ricontattiamo a breve." });
      setFieldErrors({});
      form.reset();
      mountedAtRef.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };
  const baseInput = "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 transition-all duration-200";
  const normalBorder = "border-primary-foreground/15 focus:ring-accent focus:border-accent/40";
  const errorBorder = "border-red-500 ring-2 ring-red-500/30 focus:ring-red-500 focus:border-red-500";
  const inputClasses = (field) => `${baseInput} ${field && fieldErrors[field] ? errorBorder : normalBorder}`;
  const labelClasses = "text-sm font-medium text-primary-foreground/80";
  return /* @__PURE__ */ jsxs("form", { ref: formRef, onSubmit, noValidate: true, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: labelClasses, children: "Nome *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          "data-field": "name",
          name: "name",
          type: "text",
          required: true,
          autoComplete: "name",
          className: inputClasses("name"),
          onChange: () => clearFieldError("name")
        }
      ),
      fieldErrors.name && /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.name })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: labelClasses, children: "Email *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          "data-field": "email",
          name: "email",
          type: "email",
          required: true,
          autoComplete: "email",
          className: inputClasses("email"),
          onChange: () => clearFieldError("email")
        }
      ),
      fieldErrors.email && /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.email })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: labelClasses, children: "Tipo di attività *" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          "data-field": "business_type",
          name: "business_type",
          required: true,
          defaultValue: "",
          className: `${inputClasses("business_type")} appearance-none pr-10 bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`,
          style: {
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%23ffffff' stroke-opacity='0.6' stroke-width='1.5'><path d='M1 1.5l5 5 5-5'/></svg>")`
          },
          onChange: () => clearFieldError("business_type"),
          children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, className: "bg-neutral-900", children: "Seleziona un'opzione" }),
            /* @__PURE__ */ jsx("option", { value: "Negozi", className: "bg-neutral-900", children: "Negozi" }),
            /* @__PURE__ */ jsx("option", { value: "Professionisti", className: "bg-neutral-900", children: "Professionisti" }),
            /* @__PURE__ */ jsx("option", { value: "Aziende", className: "bg-neutral-900", children: "Aziende" })
          ]
        }
      ),
      fieldErrors.business_type && /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.business_type })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: labelClasses, children: "Parlaci del tuo progetto *" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          "data-field": "message",
          name: "message",
          rows: 5,
          required: true,
          className: `${inputClasses("message")} resize-none`,
          onChange: () => clearFieldError("message")
        }
      ),
      fieldErrors.message && /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sr-only", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxs("label", { children: [
        "Website",
        /* @__PURE__ */ jsx("input", { name: "website", type: "text", tabIndex: -1, autoComplete: "off" })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "Fax",
        /* @__PURE__ */ jsx("input", { name: "fax", type: "text", tabIndex: -1, autoComplete: "off" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status.state === "sending",
        className: "btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        children: status.state === "sending" ? "Invio..." : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Richiedi analisi gratuita",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5", "aria-hidden": "true" })
        ] })
      }
    ),
    status.message && /* @__PURE__ */ jsx(
      "p",
      {
        role: "status",
        "aria-live": "polite",
        className: `mt-2 text-sm font-medium text-center ${status.state === "success" ? "text-green-400" : status.state === "error" ? "text-red-400" : "text-primary-foreground/60"}`,
        children: status.message
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold text-primary-foreground/50 mt-4 leading-relaxed", children: [
      "I dati inseriti verranno trattati e usati unicamente per rispondere alla tua richiesta di contatto (base giuridica: esecuzione di misure precontrattuali – art. 6.1.b GDPR). Titolare del trattamento: 4 Web Lab di Fullin Carlo – P.IVA 05765760284. Maggiori informazioni nella nostra",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline hover:text-primary-foreground/70 transition-colors", children: "Privacy Policy" }),
      "."
    ] })
  ] });
}
const whatsappNumber = "393514656042";
const whatsappMessage = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");
const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return /* @__PURE__ */ jsxs("section", { id: "contatti", className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)", scrollMarginTop: "var(--header-height)" }, children: [
    /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("filter", { id: "contact-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
      /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#contact-noise)" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs(AnimatedSection, { className: "lg:pr-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-1 rounded-full mb-8 bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-5", children: "Inizia il tuo progetto web con noi" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 mb-10 text-balance", children: "Parla direttamente con lo sviluppatore. Analizziamo la tua presenza online per trovare i blocchi che rallentano la tua crescita su Google e sulle AI." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.03] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300",
                "aria-label": "Avvia una chat rapida su WhatsApp",
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 text-accent", "aria-hidden": "true" }),
                  "Avvia una chat rapida"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "block text-xs text-primary-foreground/40 mt-1.5 ml-1", children: [
              /* @__PURE__ */ jsx("strong", { children: "WhatsApp" }),
              " · richiede WhatsApp Web su PC"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5", children: "Email" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "mailto:info@4weblab.it",
                  className: "text-primary-foreground hover:text-accent transition-colors",
                  children: "info@4weblab.it"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5", children: "Località" }),
              /* @__PURE__ */ jsx("p", { className: "text-primary-foreground", children: "Padova – Italia" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/60", children: "Disponibili da remoto in tutta Italia" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, children: /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]", children: /* @__PURE__ */ jsx(ContactFormWeb3Forms, {}) }) })
    ] }) })
  ] });
};
const Index = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
      /* @__PURE__ */ jsx("title", { children: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://4weblab.it/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "https://schema.org/InternetMarketingService",
        "@id": "https://4weblab.it/#business",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "3"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Mattia Loreggian" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Jessica Trovò" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Lisa Bogana" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero."
          }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto costa realizzare un sito web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO."
            }
          },
          {
            "@type": "Question",
            "name": "In quanto tempo viene realizzato un sito web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali."
            }
          },
          {
            "@type": "Question",
            "name": "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata."
            }
          }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://4weblab.it/#webpage",
        url: "https://4weblab.it/",
        name: "Web Agency Padova | Realizzazione Siti Web, SEO e Google Ads | 4 Web Lab",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        about: { "@id": "https://4weblab.it/#business" },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".aeo-answer"]
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" }
          ]
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Realizzazione siti web, SEO e Google Ads",
        provider: { "@id": "https://4weblab.it/#business" },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pacchetti siti web 4 Web Lab",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Sito web per negozi",
              url: "https://4weblab.it/siti-web-per-negozi",
              priceCurrency: "EUR",
              price: "199",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "199", valueAddedTaxIncluded: false }
            },
            {
              "@type": "Offer",
              name: "Sito web per professionisti",
              url: "https://4weblab.it/siti-web-per-professionisti",
              priceCurrency: "EUR",
              price: "549",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "549", valueAddedTaxIncluded: false }
            },
            {
              "@type": "Offer",
              name: "Sito web aziendale",
              url: "https://4weblab.it/siti-web-aziendali",
              priceCurrency: "EUR",
              price: "899",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "899", valueAddedTaxIncluded: false }
            }
          ]
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Come realizziamo il tuo sito web",
        description: "Il processo in 4 step di 4 Web Lab per realizzare un sito professionale ottimizzato per Google e per le AI.",
        totalTime: "P28D",
        step: [
          { "@type": "HowToStep", position: 1, name: "Brief gratuito", text: "Analisi delle tue esigenze, del settore e degli obiettivi di business. Sopralluogo telefonico o videocall." },
          { "@type": "HowToStep", position: 2, name: "Progettazione", text: "Architettura informativa, wireframe, scelte di design e copy strategy orientata alla conversione." },
          { "@type": "HowToStep", position: 3, name: "Sviluppo e SEO", text: "Sviluppo del sito, ottimizzazione Core Web Vitals, SEO on-page, dati strutturati per Google e AI." },
          { "@type": "HowToStep", position: 4, name: "Pubblicazione e supporto", text: "Go-live, indicizzazione, formazione e supporto continuo con un referente dedicato." }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(AboutSection, {}),
      /* @__PURE__ */ jsx(StrengthsSection, {}),
      /* @__PURE__ */ jsx(UserRoutingSection, {}),
      /* @__PURE__ */ jsx(HomeFaqPreview, {}),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const page = (loader) => async () => {
  const mod = await loader();
  return { Component: mod.default };
};
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      {
        path: "siti-web-per-professionisti",
        lazy: page(() => import("./assets/SitiWebProfessionisti-CVhl9d7U.js")),
        entry: "src/pages/SitiWebProfessionisti.tsx"
      },
      {
        path: "realizzazione-siti-web-per-professionisti",
        element: /* @__PURE__ */ jsx(Navigate, { to: "/siti-web-per-professionisti", replace: true })
      },
      {
        path: "siti-web-aziendali",
        lazy: page(() => import("./assets/SitiWebAziendali-D6HGG7Tg.js")),
        entry: "src/pages/SitiWebAziendali.tsx"
      },
      {
        path: "realizzazione-siti-web-padova",
        lazy: page(() => import("./assets/SitiWebPadova-CvPjltao.js")),
        entry: "src/pages/SitiWebPadova.tsx"
      },
      {
        path: "siti-web-per-negozi",
        lazy: page(() => import("./assets/SitiWebNegozi-Bxy-N-cu.js")),
        entry: "src/pages/SitiWebNegozi.tsx"
      },
      {
        path: "faq-realizzazione-siti-web",
        lazy: page(() => import("./assets/FaqSitiWeb-mMdVW71q.js")),
        entry: "src/pages/FaqSitiWeb.tsx"
      },
      {
        path: "posizionamento-google-e-ai",
        lazy: page(() => import("./assets/PosizionamentoGoogleEAi-BmWHJGbG.js")),
        entry: "src/pages/PosizionamentoGoogleEAi.tsx"
      },
      {
        path: "pubblicita-google-ads",
        lazy: page(() => import("./assets/PubblicitaGoogleAds-rfM7ZUyf.js")),
        entry: "src/pages/PubblicitaGoogleAds.tsx"
      },
      {
        path: "creare-sito-con-intelligenza-artificiale",
        element: /* @__PURE__ */ jsx(
          Navigate,
          {
            to: "/blog/siti-web-creati-con-intelligenza-artificiale",
            replace: true
          }
        )
      },
      {
        path: "quanto-costa-sito-web",
        element: /* @__PURE__ */ jsx(Navigate, { to: "/blog/quanto-costa-un-sito-web-nel-2026", replace: true })
      },
      {
        path: "blog",
        lazy: page(() => import("./assets/Blog-B1fGIua5.js")),
        entry: "src/pages/Blog.tsx"
      },
      {
        path: "blog/siti-web-creati-con-intelligenza-artificiale",
        lazy: page(() => import("./assets/BlogAiWebsiteArticle-COEdqmtK.js")),
        entry: "src/pages/BlogAiWebsiteArticle.tsx"
      },
      {
        path: "blog/quanto-costa-un-sito-web-nel-2026",
        lazy: page(() => import("./assets/BlogWebsiteCostArticle-Dce4D2ff.js")),
        entry: "src/pages/BlogWebsiteCostArticle.tsx"
      },
      {
        path: "blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
        lazy: page(() => import("./assets/BlogSiteVsSocialArticle-fDBkJb3t.js")),
        entry: "src/pages/BlogSiteVsSocialArticle.tsx"
      },
      {
        path: "blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
        lazy: page(() => import("./assets/BlogGdprArticle-BDA2hgQX.js")),
        entry: "src/pages/BlogGdprArticle.tsx"
      },
      {
        path: "blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
        lazy: page(() => import("./assets/BlogOutdatedWebsiteArticle-BbuV8_GI.js")),
        entry: "src/pages/BlogOutdatedWebsiteArticle.tsx"
      },
      {
        path: "blog/perche-il-tuo-sito-non-si-trova-su-google",
        lazy: page(() => import("./assets/BlogNotFoundOnGoogleArticle-CJkvMjOa.js")),
        entry: "src/pages/BlogNotFoundOnGoogleArticle.tsx"
      },
      {
        path: "blog/siti-web-piattaforme-preventivi-online-conviene",
        lazy: page(() => import("./assets/BlogQuotePlatformsArticle-C6KNnri0.js")),
        entry: "src/pages/BlogQuotePlatformsArticle.tsx"
      },
      {
        path: "blog/creare-sito-web-da-soli-conviene",
        lazy: page(() => import("./assets/BlogDiyWebsiteArticle-BgBvqvtP.js")),
        entry: "src/pages/BlogDiyWebsiteArticle.tsx"
      },
      {
        path: "blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
        lazy: page(() => import("./assets/BlogArubaSupersiteArticle-B5ZHMsnc.js")),
        entry: "src/pages/BlogArubaSupersiteArticle.tsx"
      },
      {
        path: "contatti",
        lazy: page(() => import("./assets/Contact-cN40kpun.js")),
        entry: "src/pages/Contact.tsx"
      },
      {
        path: "realizzazioni",
        lazy: page(() => import("./assets/Realizzazioni-gPzjACFi.js")),
        entry: "src/pages/Realizzazioni.tsx"
      },
      {
        path: "realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto",
        lazy: page(() => import("./assets/DemoRbSncEdilizia-SA_R-hmL.js")),
        entry: "src/pages/DemoRbSncEdilizia.tsx"
      },
      {
        path: "realizzazioni/demo-metalmeccanica",
        lazy: page(() => import("./assets/DemoMetalmeccanica-CITKCkoz.js")),
        entry: "src/pages/DemoMetalmeccanica.tsx"
      },
      {
        path: "realizzazioni/demo-studio-dentistico-premium",
        lazy: page(() => import("./assets/DemoStudioDentisticoPremium-D2EJ16VT.js")),
        entry: "src/pages/DemoStudioDentisticoPremium.tsx"
      },
      {
        path: "realizzazioni/demo-fotovoltaico",
        lazy: page(() => import("./assets/DemoFotovoltaico-CXdWPJjC.js")),
        entry: "src/pages/DemoFotovoltaico.tsx"
      },
      {
        path: "realizzazioni/boutique-bb-luxury-rooms",
        lazy: page(() => import("./assets/DemoBoutiqueBB-CdxomTLo.js")),
        entry: "src/pages/DemoBoutiqueBB.tsx"
      },
      {
        path: "realizzazioni/demo-flower-atelier",
        lazy: page(() => import("./assets/DemoFlowerAtelier-DlY7Fk5f.js")),
        entry: "src/pages/DemoFlowerAtelier.tsx"
      },
      {
        path: "realizzazioni/demo-personal-trainer-vera-method",
        lazy: page(() => import("./assets/DemoPersonalTrainerVeraMethod-DoHtsypO.js")),
        entry: "src/pages/DemoPersonalTrainerVeraMethod.tsx"
      },
      {
        path: "privacy",
        lazy: page(() => import("./assets/PrivacyPolicy-AkMwsBZb.js")),
        entry: "src/pages/PrivacyPolicy.tsx"
      },
      {
        path: "cookie",
        lazy: page(() => import("./assets/CookiePolicy-C4yFGZfg.js")),
        entry: "src/pages/CookiePolicy.tsx"
      },
      {
        path: "*",
        lazy: page(() => import("./assets/NotFound-BelHegx5.js")),
        entry: "src/pages/NotFound.tsx"
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  AnimatedSection as A,
  ContactFormWeb3Forms as C,
  Footer as F,
  Header as H,
  StaggerContainer as S,
  W,
  StaggerItem as a,
  ContactSection as b,
  cn as c,
  createRoot,
  motion as m,
  openPreferences as o
};
