var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7123830 = require("../../_app/immutable/chunks/index-a7123830.js");
var import_store_de006906 = require("../../_app/immutable/chunks/store-de006906.js");
var import_supabase_js = require("@supabase/supabase-js");
const Row = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0)
    $$bindings.job(job);
  return `<div class="${"flex flex-row justify-center my-8"}">
    ${`<div class="${"w-[23px] h-[23px] opacity-60 hover:opacity-25 py-2"}"><button><img src="${"/edit.png"}" name="${"submit"}" alt="${"edit"}"></button></div>`}

    
    ${`${job.due !== "submitted" ? `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-red-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.company)}</div>` : `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.company)}</div>`}`}

    
    ${`${job.due !== "submitted" ? `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-red-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.title)}</div>` : `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.title)}</div>`}`}

    
    ${`${job.due !== "submitted" ? `<div class="${"overflow-hidden overflow-y-hidden flex flex-col text-sm mb-2 mx-3 bg-red-300 px-2 py-2 rounded-lg w-40 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"}">${job.portal !== "" ? `<a${(0, import_index_a7123830.b)("href", job.portal, 0)} target="${"_blank"}">${(0, import_index_a7123830.e)(job.company)} Portal</a>` : ``}</div>` : `<div class="${"overflow-hidden overflow-y-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"}">${job.portal !== "" ? `<a${(0, import_index_a7123830.b)("href", job.portal, 0)} target="${"_blank"}">${(0, import_index_a7123830.e)(job.company)} Portal</a>` : ``}</div>`}`}

    
    ${`${job.due !== "submitted" ? `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-red-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.due)}</div>` : `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.due)}</div>`}`}

    
    ${`${job.due !== "submitted" ? `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-red-300 px-2 py-2 rounded-lg w-40"}">${(0, import_index_a7123830.e)(job.outcome)}</div>` : `<div class="${"overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40"}">${job.outcome === "accepted" ? `<p class="${"text-emerald-600"}">${(0, import_index_a7123830.e)(job.outcome)}</p>` : `${job.outcome === "denied" ? `<p class="${"text-red-600"}">${(0, import_index_a7123830.e)(job.outcome)}</p>` : `${(0, import_index_a7123830.e)(job.outcome)}`}`}</div>`}`}
    
    
    <div class="${"w-[20px] h-[20px] opacity-60 hover:opacity-25 py-2"}"><button><img src="${"/trash.png"}" name="${"submit"}" alt="${"delete"}"></button></div></div>`;
});
const Routes = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  let $jobList, $$unsubscribe_jobList;
  $$unsubscribe_jobList = (0, import_index_a7123830.a)(import_store_de006906.j, (value) => $jobList = value);
  $$unsubscribe_jobList();
  return `<h1 class="${"text-center font-semibold mt-5 text-3xl"}">My Jobs:</h1>

<div class="${"flex flex-row justify-center my-8"}"><div class="${"flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40"}"><p>Company</p></div>
    <div class="${"flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40"}"><p>Title</p></div>
    <div class="${"flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40"}"><p>Portal</p></div>
    <div class="${"flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40"}"><p>Due</p></div>
    <div class="${"flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40"}"><p>Outcome</p></div></div>
<main>${(0, import_index_a7123830.f)($jobList, (job) => {
    return `${(0, import_index_a7123830.v)(Row, "Row").$$render($$result, { job }, {}, {})}`;
  })}</main>`;
});
