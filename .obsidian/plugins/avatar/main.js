/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

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

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/plugin.ts
var import_obsidian6 = require("obsidian");

// src/core/renderCodeBlockProcessor.ts
var import_obsidian = require("obsidian");
function renderCodeBlockProcessor(component, props, stateProvider) {
  return (source, containerEl, ctx) => {
    const node = containerEl.createEl("div");
    const svelteComponent = new component({
      target: containerEl,
      props: {
        ...props,
        ...stateProvider == null ? void 0 : stateProvider(props, source, node, ctx),
        ctx
      }
    });
    class UnloadSvelteComponent extends import_obsidian.MarkdownRenderChild {
      onunload() {
        svelteComponent.$destroy();
      }
    }
    ctx.addChild(new UnloadSvelteComponent(node));
  };
}

// node_modules/svelte/internal/index.mjs
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
var _boolean_attributes = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance4, create_fragment4, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance4 ? instance4(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment4 ? create_fragment4($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// src/components/AvatarView.svelte
var import_obsidian4 = require("obsidian");

// src/components/Fab.svelte
function add_css(target) {
  append_styles(target, "svelte-gtyq37", ".fab.svelte-gtyq37{position:absolute;bottom:1em;right:1em;padding:var(--size-2-2) var(--size-2-3)}");
}
function create_fragment(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let button_levels = [
    { class: "fab" },
    /*$$props*/
    ctx[0]
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      set_attributes(button, button_data);
      toggle_class(button, "svelte-gtyq37", true);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [{ class: "fab" }, dirty & /*$$props*/
      1 && /*$$props*/
      ctx2[0]]));
      toggle_class(button, "svelte-gtyq37", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [$$props, $$scope, slots, click_handler];
}
var Fab = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
  }
};
var Fab_default = Fab;

// src/components/ObsidianIcon.svelte
var import_obsidian2 = require("obsidian");
function create_fragment2(ctx) {
  let span;
  return {
    c() {
      span = element("span");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      ctx[2](span);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      ctx[2](null);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let { id } = $$props;
  let el;
  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*el, id*/
    3) {
      $:
        if (el && id)
          (0, import_obsidian2.setIcon)(el, id);
    }
  };
  return [el, id, span_binding];
}
var ObsidianIcon = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, { id: 1 });
  }
};
var ObsidianIcon_default = ObsidianIcon;

// src/components/SelectImageModal.ts
var import_obsidian3 = require("obsidian");
var SelectImageModal = class extends import_obsidian3.SuggestModal {
  constructor(app2, onSelect) {
    super(app2);
    this.onSelect = onSelect;
    this.setPlaceholder("Select image / Paste URL...");
    this.setInstructions([
      { command: "\u2191\u2193", purpose: "to navigate" },
      { command: "\u21B5", purpose: "to select" }
    ]);
  }
  getSuggestions(query) {
    const search = (0, import_obsidian3.prepareFuzzySearch)(query);
    const files = this.app.vault.getFiles().filter((f) => ["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(f.extension)).map((f) => ({ title: f.name, path: f.path }));
    const searchResults = files.map((f) => {
      var _a;
      const result = search(f.title);
      return {
        title: (result == null ? void 0 : result.matches) ? fuzzyStrToFragment(f.title, result == null ? void 0 : result.matches) : strToFragment(f.title),
        path: f.path,
        score: (_a = result == null ? void 0 : result.score) != null ? _a : 1
      };
    }).filter((f) => f.score < 1).sort((a, b) => Math.abs(a.score) - Math.abs(b.score));
    if (query.startsWith("http://") || query.startsWith("https://")) {
      const shortenedQuery = query.substring(0, 30) + (query.length >= 30 ? "..." : "");
      return [
        ...searchResults,
        { title: strToFragment(shortenedQuery), desc: "Use URL", path: query }
      ];
    } else {
      return searchResults;
    }
  }
  renderSuggestion(item, el) {
    el.createEl("span", { text: item.title });
    el.createEl("small", { text: item.desc, cls: "avatar-plugin--float-right" });
  }
  onChooseSuggestion(item, evt) {
    this.onSelect((0, import_obsidian3.normalizePath)(item.path));
  }
};
function strToFragment(str) {
  const fragment = new DocumentFragment();
  fragment.createEl("span", { text: str });
  return fragment;
}
function fuzzyStrToFragment(str, matches) {
  const fragment = new DocumentFragment();
  const highlightedIndices = [];
  for (const match of matches) {
    for (let i = match[0]; i < match[1]; i++) {
      highlightedIndices.push(i);
    }
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (highlightedIndices.includes(i)) {
      fragment.createEl("span", { text: char, cls: "suggestion-highlight" });
    } else {
      fragment.createEl("span", { text: char });
    }
  }
  return fragment;
}

// src/components/AvatarView.svelte
function add_css2(target) {
  append_styles(target, "svelte-1v59h7c", ".flex.svelte-1v59h7c{display:flex;gap:1.4em;flex-wrap:wrap;justify-content:center}.flex.reverse.svelte-1v59h7c{flex-direction:row-reverse}@media(min-width: 992px){.flex.svelte-1v59h7c{flex-wrap:nowrap}}.relative.svelte-1v59h7c{position:relative}.avatar-container.svelte-1v59h7c{flex:0 0 auto}.avatar.svelte-1v59h7c{object-fit:cover;border-radius:6px}.description.svelte-1v59h7c{flex:1 1 auto;word-break:break-word;border-radius:6px}.description.editmode.svelte-1v59h7c{padding:6px}.textarea.svelte-1v59h7c{width:100%;height:100%;resize:none}.with-placeholder.svelte-1v59h7c:empty:before{content:attr(data-placeholder);color:var(--text-faint);font-style:italic}");
}
function create_if_block_1(ctx) {
  let fab;
  let current;
  fab = new Fab_default({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(fab.$$.fragment);
    },
    m(target, anchor) {
      mount_component(fab, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(fab.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fab.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fab, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let obsidianicon;
  let current;
  obsidianicon = new ObsidianIcon_default({ props: { id: "edit" } });
  return {
    c() {
      create_component(obsidianicon.$$.fragment);
    },
    m(target, anchor) {
      mount_component(obsidianicon, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(obsidianicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(obsidianicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(obsidianicon, detaching);
    }
  };
}
function create_if_block(ctx) {
  let fab;
  let current;
  fab = new Fab_default({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  fab.$on(
    "click",
    /*updateDescription*/
    ctx[10]
  );
  return {
    c() {
      create_component(fab.$$.fragment);
    },
    m(target, anchor) {
      mount_component(fab, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const fab_changes = {};
      if (dirty & /*$$scope*/
      67108864) {
        fab_changes.$$scope = { dirty, ctx: ctx2 };
      }
      fab.$set(fab_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(fab.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fab.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fab, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let obsidianicon;
  let current;
  obsidianicon = new ObsidianIcon_default({ props: { id: "save" } });
  return {
    c() {
      create_component(obsidianicon.$$.fragment);
    },
    m(target, anchor) {
      mount_component(obsidianicon, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(obsidianicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(obsidianicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(obsidianicon, detaching);
    }
  };
}
function create_fragment3(ctx) {
  let div2;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let t1;
  let div1;
  let textarea;
  let textarea_hidden_value;
  let t2;
  let span;
  let t3;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*inSourceMode*/
    ctx[5] && /*hoverOnImage*/
    ctx[2] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*editMode*/
    ctx[3] && create_if_block(ctx)
  );
  return {
    c() {
      var _a, _b;
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      div1 = element("div");
      textarea = element("textarea");
      t2 = space();
      span = element("span");
      t3 = space();
      if (if_block1)
        if_block1.c();
      attr(img, "class", "avatar svelte-1v59h7c");
      attr(img, "alt", "Avatar");
      if (!src_url_equal(img.src, img_src_value = /*state*/
      ctx[0].image ? (
        /*normalizeImgPath*/
        ctx[12](
          /*state*/
          (_a = ctx[0]) == null ? void 0 : _a.image
        )
      ) : (
        /*fallbackImage*/
        ctx[8]
      )))
        attr(img, "src", img_src_value);
      set_style(img, "width", `${/*avatarSize*/
      ctx[7]}px`);
      set_style(img, "height", `${/*avatarSize*/
      ctx[7]}px`);
      set_style(
        img,
        "object-position",
        /*objectPosition*/
        ctx[6]
      );
      attr(div0, "class", "avatar-container relative svelte-1v59h7c");
      attr(textarea, "class", "textarea svelte-1v59h7c");
      textarea.hidden = textarea_hidden_value = !/*editMode*/
      ctx[3];
      attr(textarea, "placeholder", "Write your story...");
      attr(span, "class", "avatar-plugin--md with-placeholder svelte-1v59h7c");
      span.hidden = /*editMode*/
      ctx[3];
      attr(span, "data-placeholder", "Write your story...");
      attr(div1, "class", "description relative svelte-1v59h7c");
      toggle_class(div1, "editmode", !!/*editMode*/
      ctx[3]);
      attr(div2, "class", "avatar-view flex svelte-1v59h7c");
      toggle_class(
        div2,
        "reverse",
        /*state*/
        ((_b = ctx[0]) == null ? void 0 : _b.side) === "right"
      );
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div0, img);
      append(div0, t0);
      if (if_block0)
        if_block0.m(div0, null);
      append(div2, t1);
      append(div2, div1);
      append(div1, textarea);
      ctx[21](textarea);
      set_input_value(
        textarea,
        /*state*/
        ctx[0].description
      );
      append(div1, t2);
      append(div1, span);
      ctx[23](span);
      append(div1, t3);
      if (if_block1)
        if_block1.m(div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div0,
            "click",
            /*updateImage*/
            ctx[11]
          ),
          listen(
            div0,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[19]
          ),
          listen(
            div0,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[20]
          ),
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[22]
          ),
          listen(
            div1,
            "click",
            /*enterEditMode*/
            ctx[9]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      var _a, _b;
      if (!current || dirty & /*state, fallbackImage*/
      257 && !src_url_equal(img.src, img_src_value = /*state*/
      ctx2[0].image ? (
        /*normalizeImgPath*/
        ctx2[12](
          /*state*/
          (_a = ctx2[0]) == null ? void 0 : _a.image
        )
      ) : (
        /*fallbackImage*/
        ctx2[8]
      ))) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*avatarSize*/
      128) {
        set_style(img, "width", `${/*avatarSize*/
        ctx2[7]}px`);
      }
      if (dirty & /*avatarSize*/
      128) {
        set_style(img, "height", `${/*avatarSize*/
        ctx2[7]}px`);
      }
      if (dirty & /*objectPosition*/
      64) {
        set_style(
          img,
          "object-position",
          /*objectPosition*/
          ctx2[6]
        );
      }
      if (
        /*inSourceMode*/
        ctx2[5] && /*hoverOnImage*/
        ctx2[2]
      ) {
        if (if_block0) {
          if (dirty & /*inSourceMode, hoverOnImage*/
          36) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*editMode*/
      8 && textarea_hidden_value !== (textarea_hidden_value = !/*editMode*/
      ctx2[3])) {
        textarea.hidden = textarea_hidden_value;
      }
      if (dirty & /*state*/
      1) {
        set_input_value(
          textarea,
          /*state*/
          ctx2[0].description
        );
      }
      if (!current || dirty & /*editMode*/
      8) {
        span.hidden = /*editMode*/
        ctx2[3];
      }
      if (
        /*editMode*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*editMode*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*editMode*/
      8) {
        toggle_class(div1, "editmode", !!/*editMode*/
        ctx2[3]);
      }
      if (!current || dirty & /*state*/
      1) {
        toggle_class(
          div2,
          "reverse",
          /*state*/
          ((_b = ctx2[0]) == null ? void 0 : _b.side) === "right"
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block0)
        if_block0.d();
      ctx[21](null);
      ctx[23](null);
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  let fallbackImage;
  let avatarSize;
  let objectPosition;
  var _a, _b;
  let { app: app2 } = $$props;
  let { plugin } = $$props;
  let { ctx } = $$props;
  let { state } = $$props;
  let { setState } = $$props;
  let initialDescription = state === null || state === void 0 ? void 0 : state.description;
  let hoverOnImage = false;
  let editMode = false;
  let descriptionEditEl;
  let descriptionPreviewEl;
  let inSourceMode = false;
  onMount(() => {
    $$invalidate(5, inSourceMode = isSourceMode());
    let x = app2.workspace.on("layout-change", () => {
      $$invalidate(5, inSourceMode = isSourceMode());
    });
    return () => app2.workspace.offref(x);
  });
  function isSourceMode() {
    var _a2;
    const view = app2.workspace.getActiveViewOfType(import_obsidian4.MarkdownView);
    return ((_a2 = view === null || view === void 0 ? void 0 : view.getMode) === null || _a2 === void 0 ? void 0 : _a2.call(view)) === "source";
  }
  function enterEditMode() {
    if (inSourceMode && !editMode) {
      $$invalidate(3, editMode = true);
      queueMicrotask(() => {
        descriptionEditEl.focus();
      });
    }
  }
  function updateDescription(evt) {
    $$invalidate(3, editMode = false);
    initialDescription = state.description;
    setState((fm) => {
      fm.description = state.description;
    });
    evt.stopPropagation();
  }
  function updateImage() {
    if (inSourceMode) {
      new SelectImageModal(
        app2,
        (path) => {
          setState((fm) => {
            fm.image = path;
          });
        }
      ).open();
    }
  }
  function normalizeImgPath(src) {
    const file = app2.vault.getAbstractFileByPath(src);
    if (file && file instanceof import_obsidian4.TFile) {
      return app2.vault.getResourcePath(file);
    }
    return src;
  }
  const mouseenter_handler = () => $$invalidate(2, hoverOnImage = true);
  const mouseleave_handler = () => $$invalidate(2, hoverOnImage = false);
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      descriptionEditEl = $$value;
      $$invalidate(4, descriptionEditEl);
    });
  }
  function textarea_input_handler() {
    state.description = this.value;
    $$invalidate(0, state);
  }
  function span_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      descriptionPreviewEl = $$value;
      $$invalidate(1, descriptionPreviewEl), $$invalidate(14, plugin), $$invalidate(0, state), $$invalidate(15, ctx), $$invalidate(18, _b);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("app" in $$props2)
      $$invalidate(13, app2 = $$props2.app);
    if ("plugin" in $$props2)
      $$invalidate(14, plugin = $$props2.plugin);
    if ("ctx" in $$props2)
      $$invalidate(15, ctx = $$props2.ctx);
    if ("state" in $$props2)
      $$invalidate(0, state = $$props2.state);
    if ("setState" in $$props2)
      $$invalidate(16, setState = $$props2.setState);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*ctx, _a*/
    163840) {
      $:
        $$invalidate(8, fallbackImage = `https://ui-avatars.com/api/?name=${$$invalidate(17, _a = ctx === null || ctx === void 0 ? void 0 : ctx.sourcePath.split("/").at(-1)) !== null && _a !== void 0 ? _a : "::"}&size=240`);
    }
    if ($$self.$$.dirty & /*state*/
    1) {
      $:
        $$invalidate(7, avatarSize = state.size ? typeof state.size === "string" ? { small: 180, medium: 240, large: 300 }[state.size] : state.size : 240);
    }
    if ($$self.$$.dirty & /*state*/
    1) {
      $:
        $$invalidate(6, objectPosition = state.objectPosition);
    }
    if ($$self.$$.dirty & /*descriptionPreviewEl, plugin, state, ctx, _b*/
    311299) {
      $:
        if (descriptionPreviewEl && plugin && state && (state === null || state === void 0 ? void 0 : state.description)) {
          $$invalidate(1, descriptionPreviewEl.innerHTML = "", descriptionPreviewEl);
          import_obsidian4.MarkdownRenderer.renderMarkdown(
            state.description,
            descriptionPreviewEl,
            $$invalidate(18, _b = ctx === null || ctx === void 0 ? void 0 : ctx.sourcePath) !== null && _b !== void 0 ? _b : "",
            plugin
          );
        }
    }
  };
  return [
    state,
    descriptionPreviewEl,
    hoverOnImage,
    editMode,
    descriptionEditEl,
    inSourceMode,
    objectPosition,
    avatarSize,
    fallbackImage,
    enterEditMode,
    updateDescription,
    updateImage,
    normalizeImgPath,
    app2,
    plugin,
    ctx,
    setState,
    _a,
    _b,
    mouseenter_handler,
    mouseleave_handler,
    textarea_binding,
    textarea_input_handler,
    span_binding
  ];
}
var AvatarView = class extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance3,
      create_fragment3,
      safe_not_equal,
      {
        app: 13,
        plugin: 14,
        ctx: 15,
        state: 0,
        setState: 16
      },
      add_css2
    );
  }
};
var AvatarView_default = AvatarView;

// src/core/stateProviders.ts
var import_obsidian5 = require("obsidian");
function withCodeblockState() {
  return (props, source, node, ctx) => {
    var _a;
    let state = {};
    try {
      state = (_a = (0, import_obsidian5.parseYaml)(source)) != null ? _a : {};
    } catch (_) {
    }
    const setState = (stateSetter) => {
      var _a2, _b;
      const newState = { ...state };
      stateSetter(newState);
      const newStateStr = (0, import_obsidian5.stringifyYaml)(newState);
      const info = ctx.getSectionInfo(node);
      if (info) {
        (_b = (_a2 = app.workspace.activeEditor) == null ? void 0 : _a2.editor) == null ? void 0 : _b.replaceRange(
          newStateStr + "```",
          { line: info.lineStart + 1, ch: 0 },
          { line: info.lineEnd, ch: 3 }
        );
      }
    };
    return {
      state,
      setState
    };
  };
}

// src/plugin.ts
var AvatarPlugin = class extends import_obsidian6.Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("avatar", renderCodeBlockProcessor(
      AvatarView_default,
      { app: this.app, plugin: this },
      withCodeblockState()
    ));
  }
};

// main.ts
var main_default = AvatarPlugin;

/* nosourcemap */