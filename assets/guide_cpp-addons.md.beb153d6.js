import{_ as s,o as n,c as a,S as l}from"./chunks/framework.31056c87.js";const F=JSON.parse('{"title":"C/C++ Addons","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cpp-addons.md","filePath":"guide/cpp-addons.md"}'),e={name:"guide/cpp-addons.md"},p=l(`<h1 id="c-c-addons" tabindex="-1">C/C++ Addons <a class="header-anchor" href="#c-c-addons" aria-label="Permalink to &quot;C/C++ Addons&quot;">​</a></h1><p>The <code>C/C++</code> addons of Node.js has a very notable feature, it only supports building in the <code>CommonJS</code> format, and using <code>require()</code> to load it. This is fatal to bundler like <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a> that strongly rely on the <code>ESModule</code> format.</p><p>Although there are tool plugins like <a href="https://www.npmjs.com/package/@rollup/plugin-commonjs" target="_blank" rel="noreferrer">@rollup/plugin-commonjs</a>, it is not a panacea, especially in some dynamic-require cases. This is also the biggest difference between <code>cjs</code> and <code>esm</code>.</p><p>So, many times we have to use the <code>external</code> option to exclude <code>C/C++</code> addons builds to ensure that it can work normally.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Of course, this is not absolute. If you are familiar with Vite, Rollup how works, and how <code>C/C++</code> addons are binding, then I believe you have better ways to deal with them.</p><p>Additionally, some samples for <code>C/C++</code> addons are provided here 👉 <a href="https://github.com/caoxiemeihao/electron-vite-samples" target="_blank" rel="noreferrer">electron-vite-samples</a>.</p></div><details><summary>中文</summary><p>Node.js 的 <code>C/C++</code> 扩展有个很显著的特点，它只支持构建成为 <code>CommonJS</code> 格式的模块，并且使用 <code>require()</code> 加载它。这对强依赖 <code>ESModule</code> 格式的构建工具像 Vite、Rollup 十分的致命。</p><p>虽然有 <a target="_blank" href="https://www.npmjs.com/package/@rollup/plugin-commonjs">@rollup/plugin-commonjs</a> 这样的工具插件，但它不是万能的，尤其是在一些动态加载的场景，这同样也是 <code>cjs</code> 与 <code>esm</code> 最大的不同点。</p><p>所以说，很多时候我们不得不使用 <code>external</code> 选项排除 <code>C/C++</code> 模块构建，以保障它能正常工作。</p><p>当然，这不是绝对的。如果你很熟悉 Vite、Rollup 的工作原理和 <code>C/C++</code> 模块的 <code>binding</code> 方式，那么我相信你有更好的办法处理它们。</p><p>此外，这里提供了一些 <code>C/C++</code> 模块的模板 👉 <a target="_blank" href="https://github.com/caoxiemeihao/electron-vite-samples">electron-vite-samples</a>。</p></details><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> electron </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-electron</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">electron</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Main process entry file of the Electron App.</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron/main/index.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">vite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">rollupOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">external</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">better-sqlite3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sqlite3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">serialport</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;font-style:italic;">// other \`C/C++\` addons</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="vite-plugin-native" tabindex="-1">vite-plugin-native <a class="header-anchor" href="#vite-plugin-native" aria-label="Permalink to &quot;vite-plugin-native&quot;">​</a></h2><p>In addition, you can also try to use the community plugin <a href="https://www.npmjs.com/package/vite-plugin-native" target="_blank" rel="noreferrer">vite-plugin-native</a> to load <code>C/C++</code> addons.</p><details><summary>中文</summary><p>另外，你也可以尝试使用社区插件 <a target="_blank" href="https://www.npmjs.com/package/vite-plugin-native">vite-plugin-native</a> 加载 <code>C/C++</code> 扩展。</p></details><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> electron </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-electron</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> native </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-native</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">electron</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron/main.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">vite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">native</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* options */</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,12),o=[p];function t(r,c,i,D,y,d){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{F as __pageData,u as default};