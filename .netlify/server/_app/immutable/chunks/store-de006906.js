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
  j: () => jobList,
  l: () => loadJobs,
  s: () => supabase,
  w: () => writable
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a7123830 = require("./index-a7123830.js");
var import_supabase_js = require("@supabase/supabase-js");
const subscriber_queue = [];
function writable(value, start = import_index_a7123830.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_a7123830.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_a7123830.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_a7123830.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const supabaseUrl = "https://herluynmfaubqvttjwlp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlcmx1eW5tZmF1YnF2dHRqd2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTk0NDUsImV4cCI6MTk3NTgzNTQ0NX0.byL-A9QtU3Eg9vpQqB3Gso-lxgmu4QSUxEnb3ng-L3M";
const supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
const jobList = writable([]);
const loadJobs = async () => {
  const { data, error } = await supabase.from("jobs").select().order("date_created", { ascending: true });
  if (error) {
    return console.error(error);
  }
  jobList.set(data);
};
