import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_CONVEX_SITE_URL": "https://industrious-alpaca-319.convex.site", "VITE_CONVEX_URL": "https://industrious-alpaca-319.convex.cloud", "VITE_VLY_APP_ID": "encrypted:BOGUsg9e2s0XwCOqhnGiRm2VNJ4KEObUONIa1qpe7lw0VyKiNioiNQiyh8FdhZqE3Wm/NtzO53Yocwx2zbTWc/0wvqdADwieRzd2kxXWypZdCvBfTLVRp96xzyF/47HXj9AvsXe+o9+oswofrL63", "VITE_VLY_MONITORING_URL": "encrypted:BGDSSfsl8Mb+hJsn2oSlbu1bTtG2n6iPPVBCaWS+DJ261gnR54HtNAK2iMy/VUXSwURQS4YN2PnegwbPYvQckGSUoIzcKAUU8wC5kFkw2jl72W2maFHkU5K5F0afLsbrG7r1aXqPiVQq+BMsno+2z79jnZw/QDJW27DEKSZRIcw31c2yO4zmsL/PYwT03C2OPZarlTI="};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5a767e02"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import "/node_modules/.vite/deps/@vly-ai_integrations.js?v=5a767e02";
import { Toaster } from "/src/components/ui/sonner.tsx";
import { RequireAuth } from "/src/components/RequireAuth.tsx";
import { VlyToolbar } from "/vly-toolbar-readonly.tsx";
import { ConvexAuthProvider } from "/node_modules/.vite/deps/@convex-dev_auth_react.js?v=5a767e02";
import { ConvexReactClient } from "/node_modules/.vite/deps/convex_react.js?v=9c86647a";
import __vite__cjsImport7_react from "/node_modules/.vite/deps/react.js?v=5a767e02"; const React = __vite__cjsImport7_react.__esModule ? __vite__cjsImport7_react.default : __vite__cjsImport7_react; const StrictMode = __vite__cjsImport7_react["StrictMode"]; const useEffect = __vite__cjsImport7_react["useEffect"]; const lazy = __vite__cjsImport7_react["lazy"]; const Suspense = __vite__cjsImport7_react["Suspense"];
import __vite__cjsImport8_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=5a767e02"; const createRoot = __vite__cjsImport8_reactDom_client["createRoot"];
import { BrowserRouter, Route, Routes, useLocation } from "/node_modules/.vite/deps/react-router.js?v=5a767e02";
import "/src/index.css";
const Landing = lazy(_c = () => import("/src/pages/Landing.tsx"));
_c2 = Landing;
const AuthPage = lazy(_c3 = () => import("/src/pages/Auth.tsx"));
_c4 = AuthPage;
const Dashboard = lazy(_c5 = () => import("/src/pages/Dashboard.tsx"));
_c6 = Dashboard;
const ReportForm = lazy(_c7 = () => import("/src/pages/ReportForm.tsx"));
_c8 = ReportForm;
const MyReports = lazy(_c9 = () => import("/src/pages/MyReports.tsx"));
_c0 = MyReports;
const ItemDetail = lazy(_c1 = () => import("/src/pages/ItemDetail.tsx"));
_c10 = ItemDetail;
const Matches = lazy(_c11 = () => import("/src/pages/Matches.tsx"));
_c12 = Matches;
const Claims = lazy(_c13 = () => import("/src/pages/Claims.tsx"));
_c14 = Claims;
const Messages = lazy(_c15 = () => import("/src/pages/Messages.tsx"));
_c16 = Messages;
const Conversation = lazy(_c17 = () => import("/src/pages/Conversation.tsx"));
_c18 = Conversation;
const Notifications = lazy(_c19 = () => import("/src/pages/Notifications.tsx"));
_c20 = Notifications;
const Admin = lazy(_c21 = () => import("/src/pages/Admin.tsx"));
_c22 = Admin;
const Legal = lazy(_c23 = () => import("/src/pages/Legal.tsx"));
_c24 = Legal;
const NotFound = lazy(_c25 = () => import("/src/pages/NotFound.tsx"));
_c26 = NotFound;
function RouteLoading() {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-pulse text-muted-foreground", children: "Loading..." }, void 0, false, {
    fileName: "/home/daytona/codebase/src/main.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/daytona/codebase/src/main.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_c27 = RouteLoading;
class ToolbarErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn("[VlyToolbar] Caught error, toolbar disabled:", err.message);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
class RootErrorBoundary extends React.Component {
  state = { hasError: false, message: "", stack: "" };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message || "Unknown runtime error",
      stack: error.stack || ""
    };
  }
  componentDidCatch(err) {
    console.error("[Preview] Root crash:", err);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center bg-background text-foreground p-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-lg text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold", children: "Preview runtime error" }, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-xs text-muted-foreground break-words", children: this.state.message }, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        this.state.stack && /* @__PURE__ */ jsxDEV("pre", { className: "mt-3 text-left text-[10px] leading-4 text-muted-foreground/80 max-h-40 overflow-auto rounded border border-border/60 p-2", children: this.state.stack }, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/daytona/codebase/src/main.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/daytona/codebase/src/main.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this);
    }
    return this.props.children;
  }
}
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);
function RouteSyncer() {
  _s();
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*"
    );
  }, [location.pathname]);
  useEffect(() => {
    function handleMessage(event) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return null;
}
_s(RouteSyncer, "Fsnn4T0K08C2NlVrqWhZtVJucvU=", false, function() {
  return [useLocation];
});
_c28 = RouteSyncer;
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(RootErrorBoundary, { children: [
    /* @__PURE__ */ jsxDEV(ToolbarErrorBoundary, { children: /* @__PURE__ */ jsxDEV(VlyToolbar, {}, void 0, false, {
      fileName: "/home/daytona/codebase/src/main.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/daytona/codebase/src/main.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ConvexAuthProvider, { client: convex, children: [
      /* @__PURE__ */ jsxDEV(BrowserRouter, { children: [
        /* @__PURE__ */ jsxDEV(RouteSyncer, {}, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV(RouteLoading, {}, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 130,
          columnNumber: 31
        }, this), children: /* @__PURE__ */ jsxDEV(Routes, { children: [
          /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Landing, {}, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 132,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Route, { path: "/legal", element: /* @__PURE__ */ jsxDEV(Legal, {}, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 134,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Route, { path: "/legal/:slug", element: /* @__PURE__ */ jsxDEV(Legal, {}, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 135,
            columnNumber: 51
          }, this) }, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/auth",
              element: /* @__PURE__ */ jsxDEV(AuthPage, { redirectAfterAuth: "/dashboard" }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 138,
                columnNumber: 26
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 136,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/dashboard",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 145,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 144,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 141,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/report",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(ReportForm, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 152,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 149,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/my-reports",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(MyReports, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 161,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 160,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 157,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/matches",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Matches, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 165,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/claims",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Claims, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 177,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 176,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 173,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/messages",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Messages, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 184,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 181,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/messages/:id",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Conversation, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 193,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 189,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/notifications",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Notifications, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 201,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 197,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/admin",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Admin, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 208,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 205,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Route,
            {
              path: "/item/:id",
              element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(ItemDetail, {}, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 219,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/daytona/codebase/src/main.tsx",
                lineNumber: 218,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/daytona/codebase/src/main.tsx",
              lineNumber: 215,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(Route, { path: "*", element: /* @__PURE__ */ jsxDEV(NotFound, {}, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 223,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "/home/daytona/codebase/src/main.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/daytona/codebase/src/main.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/daytona/codebase/src/main.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
        fileName: "/home/daytona/codebase/src/main.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/daytona/codebase/src/main.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/daytona/codebase/src/main.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/daytona/codebase/src/main.tsx",
    lineNumber: 122,
    columnNumber: 3
  }, this)
);
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28;
$RefreshReg$(_c, "Landing$lazy");
$RefreshReg$(_c2, "Landing");
$RefreshReg$(_c3, "AuthPage$lazy");
$RefreshReg$(_c4, "AuthPage");
$RefreshReg$(_c5, "Dashboard$lazy");
$RefreshReg$(_c6, "Dashboard");
$RefreshReg$(_c7, "ReportForm$lazy");
$RefreshReg$(_c8, "ReportForm");
$RefreshReg$(_c9, "MyReports$lazy");
$RefreshReg$(_c0, "MyReports");
$RefreshReg$(_c1, "ItemDetail$lazy");
$RefreshReg$(_c10, "ItemDetail");
$RefreshReg$(_c11, "Matches$lazy");
$RefreshReg$(_c12, "Matches");
$RefreshReg$(_c13, "Claims$lazy");
$RefreshReg$(_c14, "Claims");
$RefreshReg$(_c15, "Messages$lazy");
$RefreshReg$(_c16, "Messages");
$RefreshReg$(_c17, "Conversation$lazy");
$RefreshReg$(_c18, "Conversation");
$RefreshReg$(_c19, "Notifications$lazy");
$RefreshReg$(_c20, "Notifications");
$RefreshReg$(_c21, "Admin$lazy");
$RefreshReg$(_c22, "Admin");
$RefreshReg$(_c23, "Legal$lazy");
$RefreshReg$(_c24, "Legal");
$RefreshReg$(_c25, "NotFound$lazy");
$RefreshReg$(_c26, "NotFound");
$RefreshReg$(_c27, "RouteLoading");
$RefreshReg$(_c28, "RouteSyncer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/daytona/codebase/src/main.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/daytona/codebase/src/main.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/daytona/codebase/src/main.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFFLEtBQUE7QUFBQSxhQUFBQyxLQUFBO0FBQUEsYUFBQUUsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUMsTUFBQTtBQUFBLGFBQUFFLE1BQUE7QUFBQSxhQUFBQyxNQUFBO0FBQUEsYUFBQUUsTUFBQTtBQUFBLGFBQUFDLE1BQUE7QUFBQSxhQUFBRSxNQUFBO0FBQUEsYUFBQUMsTUFBQTtBQUFBLGFBQUFFLE1BQUE7QUFBQSxhQUFBQyxNQUFBO0FBQUEsYUFBQUUsTUFBQTtBQUFBLGFBQUFDLE1BQUE7QUFBQSxhQUFBRSxNQUFBO0FBQUEsYUFBQUMsTUFBQTtBQUFBLGFBQUFFLE1BQUE7QUFBQSxhQUFBQyxNQUFBO0FBQUEsYUFBQUUsTUFBQTtBQUFBLGFBQUFDLE1BQUE7QUFBQSxhQUFBRSxNQUFBO0FBQUEsYUFBQXlDLE1BQUEiLCJuYW1lcyI6WyJUb2FzdGVyIiwiUmVxdWlyZUF1dGgiLCJWbHlUb29sYmFyIiwiQ29udmV4QXV0aFByb3ZpZGVyIiwiQ29udmV4UmVhY3RDbGllbnQiLCJSZWFjdCIsIlN0cmljdE1vZGUiLCJ1c2VFZmZlY3QiLCJsYXp5IiwiU3VzcGVuc2UiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwidXNlTG9jYXRpb24iLCJMYW5kaW5nIiwiX2MiLCJfYzIiLCJBdXRoUGFnZSIsIl9jMyIsIl9jNCIsIkRhc2hib2FyZCIsIl9jNSIsIl9jNiIsIlJlcG9ydEZvcm0iLCJfYzciLCJfYzgiLCJNeVJlcG9ydHMiLCJfYzkiLCJfYzAiLCJJdGVtRGV0YWlsIiwiX2MxIiwiX2MxMCIsIk1hdGNoZXMiLCJfYzExIiwiX2MxMiIsIkNsYWltcyIsIl9jMTMiLCJfYzE0IiwiTWVzc2FnZXMiLCJfYzE1IiwiX2MxNiIsIkNvbnZlcnNhdGlvbiIsIl9jMTciLCJfYzE4IiwiTm90aWZpY2F0aW9ucyIsIl9jMTkiLCJfYzIwIiwiQWRtaW4iLCJfYzIxIiwiX2MyMiIsIkxlZ2FsIiwiX2MyMyIsIl9jMjQiLCJOb3RGb3VuZCIsIl9jMjUiLCJfYzI2IiwiUm91dGVMb2FkaW5nIiwiX2MyNyIsIlRvb2xiYXJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50Iiwic3RhdGUiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJvb3RFcnJvckJvdW5kYXJ5Iiwic3RhY2siLCJlcnJvciIsImNvbnZleCIsImltcG9ydCIsImVudiIsIlZJVEVfQ09OVkVYX1VSTCIsIlJvdXRlU3luY2VyIiwiX3MiLCJsb2NhdGlvbiIsIndpbmRvdyIsInBhcmVudCIsInBvc3RNZXNzYWdlIiwidHlwZSIsInBhdGgiLCJwYXRobmFtZSIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJkaXJlY3Rpb24iLCJoaXN0b3J5IiwiYmFjayIsImZvcndhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfYzI4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHZseS1haS9pbnRlZ3JhdGlvbnMnO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc29ubmVyXCI7XG5pbXBvcnQgeyBSZXF1aXJlQXV0aCB9IGZyb20gXCJAL2NvbXBvbmVudHMvUmVxdWlyZUF1dGhcIjtcbmltcG9ydCB7IFZseVRvb2xiYXIgfSBmcm9tIFwiLi4vdmx5LXRvb2xiYXItcmVhZG9ubHkudHN4XCI7XG5pbXBvcnQgeyBDb252ZXhBdXRoUHJvdmlkZXIgfSBmcm9tIFwiQGNvbnZleC1kZXYvYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQ29udmV4UmVhY3RDbGllbnQgfSBmcm9tIFwiY29udmV4L3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgU3RyaWN0TW9kZSwgdXNlRWZmZWN0LCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vIExhenkgbG9hZCByb3V0ZSBjb21wb25lbnRzIGZvciBiZXR0ZXIgY29kZSBzcGxpdHRpbmdcbmNvbnN0IExhbmRpbmcgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvTGFuZGluZy50c3hcIikpO1xuY29uc3QgQXV0aFBhZ2UgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvQXV0aC50c3hcIikpO1xuY29uc3QgRGFzaGJvYXJkID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL3BhZ2VzL0Rhc2hib2FyZC50c3hcIikpO1xuY29uc3QgUmVwb3J0Rm9ybSA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9wYWdlcy9SZXBvcnRGb3JtLnRzeFwiKSk7XG5jb25zdCBNeVJlcG9ydHMgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvTXlSZXBvcnRzLnRzeFwiKSk7XG5jb25zdCBJdGVtRGV0YWlsID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL3BhZ2VzL0l0ZW1EZXRhaWwudHN4XCIpKTtcbmNvbnN0IE1hdGNoZXMgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvTWF0Y2hlcy50c3hcIikpO1xuY29uc3QgQ2xhaW1zID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL3BhZ2VzL0NsYWltcy50c3hcIikpO1xuY29uc3QgTWVzc2FnZXMgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvTWVzc2FnZXMudHN4XCIpKTtcbmNvbnN0IENvbnZlcnNhdGlvbiA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9wYWdlcy9Db252ZXJzYXRpb24udHN4XCIpKTtcbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvTm90aWZpY2F0aW9ucy50c3hcIikpO1xuY29uc3QgQWRtaW4gPSBsYXp5KCgpID0+IGltcG9ydChcIi4vcGFnZXMvQWRtaW4udHN4XCIpKTtcbmNvbnN0IExlZ2FsID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL3BhZ2VzL0xlZ2FsLnRzeFwiKSk7XG5jb25zdCBOb3RGb3VuZCA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9wYWdlcy9Ob3RGb3VuZC50c3hcIikpO1xuXG4vLyBTaW1wbGUgbG9hZGluZyBmYWxsYmFjayBmb3Igcm91dGUgdHJhbnNpdGlvbnNcbmZ1bmN0aW9uIFJvdXRlTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLyoqIFNpbGVudCBlcnJvciBib3VuZGFyeSDigJQgaWYgVmx5VG9vbGJhciBjcmFzaGVzIGl0IHJlbmRlcnMgbm90aGluZyBpbnN0ZWFkIG9mXG4gKiAgY3Jhc2hpbmcgdGhlIHdob2xlIGFwcCAoZS5nLiBob29rIGVycm9ycyBpbiB0aGUgYnJvd3NlciBydW50aW1lKS4gKi9cbmNsYXNzIFRvb2xiYXJFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSxcbiAgeyBoYXNFcnJvcjogYm9vbGVhbiB9XG4+IHtcbiAgc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XG4gIH1cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyOiBFcnJvcikge1xuICAgIGNvbnNvbGUud2FybihcIltWbHlUb29sYmFyXSBDYXVnaHQgZXJyb3IsIHRvb2xiYXIgZGlzYWJsZWQ6XCIsIGVyci5tZXNzYWdlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzRXJyb3IgPyBudWxsIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG4vKiogSGFyZCBndWFyZCBzbyBydW50aW1lIGVycm9ycyBuZXZlciBsZWF2ZSB0aGUgcHJldmlldyBhcyBhIGJsYW5rIHBhZ2UuICovXG5jbGFzcyBSb290RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0sXG4gIHsgaGFzRXJyb3I6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZzsgc3RhY2s6IHN0cmluZyB9XG4+IHtcbiAgc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSwgbWVzc2FnZTogXCJcIiwgc3RhY2s6IFwiXCIgfTtcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogRXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiVW5rbm93biBydW50aW1lIGVycm9yXCIsXG4gICAgICBzdGFjazogZXJyb3Iuc3RhY2sgfHwgXCJcIixcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZENhdGNoKGVycjogRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1ByZXZpZXddIFJvb3QgY3Jhc2g6XCIsIGVycik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZCBwLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5QcmV2aWV3IHJ1bnRpbWUgZXJyb3I8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGJyZWFrLXdvcmRzXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGFjayAmJiAoXG4gICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxlZnQgdGV4dC1bMTBweF0gbGVhZGluZy00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZC84MCBtYXgtaC00MCBvdmVyZmxvdy1hdXRvIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ib3JkZXIvNjAgcC0yXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhY2t9XG4gICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5jb25zdCBjb252ZXggPSBuZXcgQ29udmV4UmVhY3RDbGllbnQoaW1wb3J0Lm1ldGEuZW52LlZJVEVfQ09OVkVYX1VSTCBhcyBzdHJpbmcpO1xuXG5cblxuZnVuY3Rpb24gUm91dGVTeW5jZXIoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxuICAgICAgeyB0eXBlOiBcImlmcmFtZS1yb3V0ZS1jaGFuZ2VcIiwgcGF0aDogbG9jYXRpb24ucGF0aG5hbWUgfSxcbiAgICAgIFwiKlwiLFxuICAgICk7XG4gIH0sIFtsb2NhdGlvbi5wYXRobmFtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGF0YT8udHlwZSA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLmRpcmVjdGlvbiA9PT0gXCJiYWNrXCIpIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuZGlyZWN0aW9uID09PSBcImZvcndhcmRcIikgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBoYW5kbGVNZXNzYWdlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpISkucmVuZGVyKFxuICA8U3RyaWN0TW9kZT5cbiAgICA8Um9vdEVycm9yQm91bmRhcnk+XG4gICAgICA8VG9vbGJhckVycm9yQm91bmRhcnk+XG4gICAgICAgIDxWbHlUb29sYmFyIC8+XG4gICAgICA8L1Rvb2xiYXJFcnJvckJvdW5kYXJ5PlxuICAgICAgPENvbnZleEF1dGhQcm92aWRlciBjbGllbnQ9e2NvbnZleH0+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgIDxSb3V0ZVN5bmNlciAvPlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFJvdXRlTG9hZGluZyAvPn0+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGFuZGluZyAvPn0gLz5cbiAgICAgICAgICAgICAgey8qIFB1YmxpYyDigJQgbGVnYWwgZG9jdW1lbnRzIG11c3QgYmUgcmVhZGFibGUgd2l0aG91dCBhbiBhY2NvdW50LiAqL31cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbGVnYWxcIiBlbGVtZW50PXs8TGVnYWwgLz59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xlZ2FsLzpzbHVnXCIgZWxlbWVudD17PExlZ2FsIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBwYXRoPVwiL2F1dGhcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxBdXRoUGFnZSByZWRpcmVjdEFmdGVyQXV0aD1cIi9kYXNoYm9hcmRcIiAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIE1lbWJlci1vbmx5OiB0aGUgbmVhcmJ5IGZlZWQgYW5kIGV2ZXJ5dGhpbmcgYmVoaW5kIGl0LiAqL31cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgcGF0aD1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgcGF0aD1cIi9yZXBvcnRcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8UmVwb3J0Rm9ybSAvPlxuICAgICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvbXktcmVwb3J0c1wiXG4gICAgICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgICAgICA8UmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgICAgIDxNeVJlcG9ydHMgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBwYXRoPVwiL21hdGNoZXNcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8TWF0Y2hlcyAvPlxuICAgICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvY2xhaW1zXCJcbiAgICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgIDxSZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICAgICAgPENsYWltcyAvPlxuICAgICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvbWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXMgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBwYXRoPVwiL21lc3NhZ2VzLzppZFwiXG4gICAgICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgICAgICA8UmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgICAgIDxDb252ZXJzYXRpb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBwYXRoPVwiL25vdGlmaWNhdGlvbnNcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9ucyAvPlxuICAgICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvYWRtaW5cIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8QWRtaW4gLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogSXRlbSBkZXRhaWwgcmVuZGVycyBpbnNpZGUgdGhlIG1lbWJlciBzaGVsbDsgUmVxdWlyZUF1dGgga2VlcHMgdGhlXG4gICAgICAgICAgICAgICAgICAvaXRlbS86aWQgcGF0aCBhcyB0aGUgcmV0dXJuVG8gZm9yIGEgc2lnbmVkLW91dCBzaGFyZWQgbGluay4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9XCIvaXRlbS86aWRcIlxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbURldGFpbCAvPlxuICAgICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDwvQ29udmV4QXV0aFByb3ZpZGVyPlxuICAgIDwvUm9vdEVycm9yQm91bmRhcnk+XG4gIDwvU3RyaWN0TW9kZT4sXG4pO1xuIl0sImZpbGUiOiIvaG9tZS9kYXl0b25hL2NvZGViYXNlL3NyYy9tYWluLnRzeCJ9