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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7123830 = require("../../_app/immutable/chunks/index-a7123830.js");
var import_store_de006906 = require("../../_app/immutable/chunks/store-de006906.js");
var import_supabase_js = require("@supabase/supabase-js");
const app = "";
const user = (0, import_store_de006906.w)(false);
const Form = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_a7123830.a)(user, (value) => value);
  let company = "";
  let title = "";
  let link = "";
  let due = "";
  let outcome = "";
  $$unsubscribe_user();
  return `<form><div class="${"flex flex-row justify-center pb-10"}">
        <div class="${"flex flex-col text-sm mb-2 px-3"}"><label for="${"company"}" class="${"font-bold mb-2 text-gray-800 float-left"}">Company
            </label>
    
            
            <input type="${"text"}" name="${"company"}" placeholder="${"ex. Google"}" class="${"appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg"}"${(0, import_index_a7123830.b)("value", company, 0)}></div>

        <div class="${"flex flex-col text-sm mb-2 px-3"}"><label for="${"title"}" class="${"font-bold mb-2 text-gray-800 float-left"}">Job Title
            </label>
    
            
            <input type="${"text"}" name="${"title"}" placeholder="${"ex. frontend intern"}" class="${"appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_a7123830.b)("value", title, 0)}></div>

        <div class="${"flex flex-col text-sm mb-2 px-3"}"><label for="${"link"}" class="${"font-bold mb-2 text-gray-800 float-left"}">Link to Portal
            </label>
    
            
            <input type="${"text"}" name="${"link"}" placeholder="${"..."}" class="${"appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_a7123830.b)("value", link, 0)}></div>

        <div class="${"flex flex-col text-sm mb-2 px-3"}"><label for="${"flag"}" class="${"font-bold mb-2 text-gray-800 float-left"}">Due Date/Submitted
            </label>
    
            
            <input type="${"text"}" name="${"flag"}" placeholder="${"mm/dd/yy/submitted"}" class="${"appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_a7123830.b)("value", due, 0)}></div>

        <div class="${"flex flex-col text-sm mb-2 px-3"}"><label for="${"outcome"}" class="${"font-bold mb-2 text-gray-800 float-left"}">Outcome
            </label>
    
            
            <input type="${"text"}" name="${"outcome"}" placeholder="${"accepted/denied/tbd"}" class="${"appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_a7123830.b)("value", outcome, 0)}></div>

        <div class="${"py-7 px-3"}"><button type="${"submit"}" class="${"shadow-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4"}">Add Job
            </button></div></div></form>`;
});
const Auth = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  let email;
  return `<form><div style="${"background-image: url(/bg.jpg)"}" class="${"flex h-screen justify-center pt-20"}"><div class="${"flex flex-col text-sm mb-2 container mx-auto my-6 max-w-sm"}"><h1 class="${"text-2xl font-bold text-center text-zinc-600 md:text-3xl"}">Login</h1>
            <p class="${"text-center mt-2 text-zinc-600"}">Enter your email below to sign in via a magic link</p>
            
            <label class="${"font-bold mb-2 text-gray-800"}" for="${"email"}"></label>
            <input class="${"appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg mt-2"}" name="${"email"}" type="${"email"}" placeholder="${"email address"}"${(0, import_index_a7123830.b)("value", email, 0)}>
    
            <button class="${"shadow-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 mt-2"}" type="${"submit"}">Log In
            </button></div></div></form>`;
});
const Nav = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"my-4 flex justify-end px-5"}"><button class="${"shadow-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4"}">Log Out
    </button></div>`;
});
user.set(import_store_de006906.s.auth.user());
import_store_de006906.s.auth.onAuthStateChange((_, session) => {
  user.set(session == null ? void 0 : session.user);
  if (session == null ? void 0 : session.user) {
    (0, import_store_de006906.l)();
  }
});
const _layout = (0, import_index_a7123830.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_a7123830.a)(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$$result.head += `${$$result.title = `<title>Job Tracker</title>`, ""}`, ""}

<div>${$user ? `${(0, import_index_a7123830.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
        ${slots.default ? slots.default({}) : ``}
        ${(0, import_index_a7123830.v)(Form, "Form").$$render($$result, {}, {}, {})}` : `${(0, import_index_a7123830.v)(Auth, "Auth").$$render($$result, {}, {}, {})}`}</div>`;
});
