(()=>{"use strict";var t={692:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=n.template,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}connectedCallback(){const t=document.querySelectorAll("sub"),e=this.shadowRoot.querySelector("footer"),n=t.length;for(let o=0;o<n;o++)e.appendChild(t[o]),e.append(document.createElement("br"))}}e.default=n,n.tag="article-footer",n.template="\n    <style>\n      hr {\n        margin-left: 0px;\n        border: none;\n        max-width: 150px;\n        width: 35vw;\n        height: 0.75px;\n        color: var(--text-color);\n        background-color: var(--text-color);\n      }\n      a {\n        color: #95c379;\n        text-decoration: none;\n      }\n    </style>\n    <br />\n    <br />\n    <br />\n    <hr />\n    <footer></footer>\n  "},384:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=n.template,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}connectedCallback(){document.body.prepend(this)}}e.default=n,n.tag="fanaro-nav",n.template='\n    <style>\n      a {\n        display: inline-flex;\n        align-items: center;\n        font-size: 1.5rem;\n        color: var(--text-color);\n        text-decoration: none;\n      }\n      svg {\n        padding-right: 10px;\n      }\n    </style>\n    <nav>\n      <a href="/">\n        <svg width="50" height="50">\n          <image width="50" height="50" href="../../assets/favicon.svg" />\n        </svg>\n        <h1>fanaro.io</h1>\n      </a>\n    </nav>\n  '},506:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n extends HTMLElement{constructor(t=""){super(),this._text="",this.nextIndex=1,this._text=t;const e=document.createElement("template");e.innerHTML=n.template,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))}get text(){return this._text}connectedCallback(){""==this._text&&(this._text=this.getAttribute("text")),this.calculateNextIndex(),this.editSup(),this.editSub()}calculateNextIndex(){const t=document.querySelector("article").querySelectorAll("foot-note").length;this.nextIndex=t}editSup(){const t=this.shadowRoot.querySelector("a");t.innerHTML=this.nextIndex.toString(),t.href="#footnote-"+this.nextIndex.toString(),this.shadowRoot.querySelector("sup").id="footnote-base-"+this.nextIndex.toString()}editSub(){const t=document.createElement("a");t.innerHTML=this.nextIndex.toString(),t.href="#footnote-base-"+this.nextIndex.toString(),t.style.color=n.anchorColor;const e=document.createElement("sub");e.id="footnote-"+this.nextIndex.toString(),e.innerHTML=": "+this._text,e.prepend(t),document.querySelector("article").append(e)}}e.default=n,n.tag="foot-note",n.anchorColor="#D9C07B",n.template=`\n    <style>\n      a {\n        color: ${n.anchorColor};\n        text-decoration: none;\n      }\n      sup {\n        color: ${n.anchorColor};\n      }\n    </style>\n    <sup><a></a></sup>\n  `},576:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n extends HTMLElement{constructor(t="",e=""){super(),this._link=t,this._text=e;const o=document.createElement("template");o.innerHTML=n.template,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}get link(){return this._link}get text(){return this._text}connectedCallback(){if(""==this._link||""==this._text){this._link=this.getAttribute("link"),this._text=this.getAttribute("text");const t=this.shadowRoot.querySelector("a");t.href=this._link,t.text=this._text}}}e.default=n,n.tag="local-link",n.template="\n    <style>\n      a {\n        color: #E67D40;\n        text-decoration: none;\n      }\n    </style>\n    <a></a>\n  "},607:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=o(n(692)),r=o(n(384)),l=o(n(506)),s=o(n(576));customElements.define(s.default.tag,s.default),customElements.define(l.default.tag,l.default),customElements.define(a.default.tag,a.default),customElements.define(r.default.tag,r.default)}},e={};!function n(o){if(e[o])return e[o].exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW5hcm8uaW8vLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlX2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9mYW5hcm8uaW8vLi9zcmMvY29tcG9uZW50cy9mYW5hcm9fbmF2LnRzIiwid2VicGFjazovL2ZhbmFyby5pby8uL3NyYy9jb21wb25lbnRzL2Zvb3Rub3RlLnRzIiwid2VicGFjazovL2ZhbmFyby5pby8uL3NyYy9jb21wb25lbnRzL2xvY2FsX2xpbmsudHMiLCJ3ZWJwYWNrOi8vZmFuYXJvLmlvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2ZhbmFyby5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYW5hcm8uaW8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQXJ0aWNsZUZvb3RlckVsZW1lbnQiLCJIVE1MRWxlbWVudCIsInN1cGVyIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0aGlzIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJmb290bm90ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9vdGVyIiwicXVlcnlTZWxlY3RvciIsImZvb3Rub3Rlc0xlbmd0aCIsImxlbmd0aCIsImkiLCJhcHBlbmQiLCJkZWZhdWx0IiwidGFnIiwiRmFuYXJvTmF2RWxlbWVudCIsImJvZHkiLCJwcmVwZW5kIiwiRm9vdG5vdGVFbGVtZW50IiwidGV4dCIsIl90ZXh0IiwibmV4dEluZGV4IiwiZ2V0QXR0cmlidXRlIiwiY2FsY3VsYXRlTmV4dEluZGV4IiwiZWRpdFN1cCIsImVkaXRTdWIiLCJudW1iZXJPZkZvb3Rub3RlcyIsInN1cEFuY2hvciIsInRvU3RyaW5nIiwiaHJlZiIsImlkIiwic3ViQW5jaG9yIiwic3R5bGUiLCJjb2xvciIsImFuY2hvckNvbG9yIiwic3ViIiwiTG9jYWxMaW5rRWxlbWVudCIsImxpbmsiLCJfbGluayIsImlubmVyQW5jaG9yIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImFydGljbGVfZm9vdGVyXzEiLCJmYW5hcm9fbmF2XzEiLCJmb290bm90ZV8xIiwibG9jYWxfbGlua18xIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCJdLCJtYXBwaW5ncyI6InNDQUNBQSxPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxVQUE2QkMsWUFDL0IsY0FDSUMsUUFDQSxNQUFNQyxFQUFXQyxTQUFTQyxjQUFjLFlBQ3hDRixFQUFTRyxVQUFZTixFQUFxQkcsU0FDMUNJLEtBQUtDLGFBQWEsQ0FBRUMsS0FBTSxTQUMxQkYsS0FBS0csV0FBV0MsWUFBWVIsRUFBU1MsUUFBUUMsV0FBVSxJQUUzRCxvQkFDSSxNQUFNQyxFQUFZVixTQUFTVyxpQkFBaUIsT0FDdENDLEVBQVNULEtBQUtHLFdBQVdPLGNBQWMsVUFDdkNDLEVBQWtCSixFQUFVSyxPQUNsQyxJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUYsRUFBaUJFLElBQ2pDSixFQUFPTCxZQUFZRyxFQUFVTSxJQUM3QkosRUFBT0ssT0FBT2pCLFNBQVNDLGNBQWMsUUFJakRQLEVBQVF3QixRQUFVdEIsRUFDbEJBLEVBQXFCdUIsSUFBTSxpQkFDM0J2QixFQUFxQkcsU0FBVyx5WixZQ3JCaENQLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU15QixVQUF5QnZCLFlBQzNCLGNBQ0lDLFFBQ0EsTUFBTUMsRUFBV0MsU0FBU0MsY0FBYyxZQUN4Q0YsRUFBU0csVUFBWWtCLEVBQWlCckIsU0FDdENJLEtBQUtDLGFBQWEsQ0FBRUMsS0FBTSxTQUMxQkYsS0FBS0csV0FBV0MsWUFBWVIsRUFBU1MsUUFBUUMsV0FBVSxJQUUzRCxvQkFDSVQsU0FBU3FCLEtBQUtDLFFBQVFuQixPQUc5QlQsRUFBUXdCLFFBQVVFLEVBQ2xCQSxFQUFpQkQsSUFBTSxhQUN2QkMsRUFBaUJyQixTQUFXLDRkLFlDZjVCUCxPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNNEIsVUFBd0IxQixZQUMxQixZQUFZMkIsRUFBTyxJQUNmMUIsUUFDQUssS0FBS3NCLE1BQVEsR0FDYnRCLEtBQUt1QixVQUFZLEVBQ2pCdkIsS0FBS3NCLE1BQVFELEVBQ2IsTUFBTXpCLEVBQVdDLFNBQVNDLGNBQWMsWUFDeENGLEVBQVNHLFVBQVlxQixFQUFnQnhCLFNBQ3JDSSxLQUFLQyxhQUFhLENBQUVDLEtBQU0sU0FDMUJGLEtBQUtHLFdBQVdDLFlBQVlSLEVBQVNTLFFBQVFDLFdBQVUsSUFFM0QsV0FDSSxPQUFPTixLQUFLc0IsTUFFaEIsb0JBQ3NCLElBQWR0QixLQUFLc0IsUUFDTHRCLEtBQUtzQixNQUFRdEIsS0FBS3dCLGFBQWEsU0FDbkN4QixLQUFLeUIscUJBQ0x6QixLQUFLMEIsVUFDTDFCLEtBQUsyQixVQUVULHFCQUNJLE1BRU1DLEVBRlUvQixTQUFTYSxjQUFjLFdBQ05GLGlCQUFpQixhQUNQSSxPQUMzQ1osS0FBS3VCLFVBQVlLLEVBRXJCLFVBQ0ksTUFBTUMsRUFBWTdCLEtBQUtHLFdBQVdPLGNBQWMsS0FDaERtQixFQUFVOUIsVUFBWUMsS0FBS3VCLFVBQVVPLFdBQ3JDRCxFQUFVRSxLQUFPLGFBQWUvQixLQUFLdUIsVUFBVU8sV0FDbkM5QixLQUFLRyxXQUFXTyxjQUFjLE9BQ3RDc0IsR0FBSyxpQkFBbUJoQyxLQUFLdUIsVUFBVU8sV0FFL0MsVUFDSSxNQUFNRyxFQUFZcEMsU0FBU0MsY0FBYyxLQUN6Q21DLEVBQVVsQyxVQUFZQyxLQUFLdUIsVUFBVU8sV0FDckNHLEVBQVVGLEtBQU8sa0JBQW9CL0IsS0FBS3VCLFVBQVVPLFdBQ3BERyxFQUFVQyxNQUFNQyxNQUFRZixFQUFnQmdCLFlBQ3hDLE1BQU1DLEVBQU14QyxTQUFTQyxjQUFjLE9BQ25DdUMsRUFBSUwsR0FBSyxZQUFjaEMsS0FBS3VCLFVBQVVPLFdBQ3RDTyxFQUFJdEMsVUFBWSxLQUFPQyxLQUFLc0IsTUFDNUJlLEVBQUlsQixRQUFRYyxHQUNJcEMsU0FBU2EsY0FBYyxXQUMvQkksT0FBT3VCLElBR3ZCOUMsRUFBUXdCLFFBQVVLLEVBQ2xCQSxFQUFnQkosSUFBTSxZQUN0QkksRUFBZ0JnQixZQUFjLFVBQzlCaEIsRUFBZ0J4QixTQUFXLDRDQUdWd0IsRUFBZ0JnQixzRkFJaEJoQixFQUFnQmdCLG1FLFlDMURqQy9DLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU04QyxVQUF5QjVDLFlBQzNCLFlBQVk2QyxFQUFPLEdBQUlsQixFQUFPLElBQzFCMUIsUUFDQUssS0FBS3dDLE1BQVFELEVBQ2J2QyxLQUFLc0IsTUFBUUQsRUFDYixNQUFNekIsRUFBV0MsU0FBU0MsY0FBYyxZQUN4Q0YsRUFBU0csVUFBWXVDLEVBQWlCMUMsU0FDdENJLEtBQUtDLGFBQWEsQ0FBRUMsS0FBTSxTQUMxQkYsS0FBS0csV0FBV0MsWUFBWVIsRUFBU1MsUUFBUUMsV0FBVSxJQUUzRCxXQUNJLE9BQU9OLEtBQUt3QyxNQUVoQixXQUNJLE9BQU94QyxLQUFLc0IsTUFFaEIsb0JBQ0ksR0FBa0IsSUFBZHRCLEtBQUt3QyxPQUE2QixJQUFkeEMsS0FBS3NCLE1BQWEsQ0FDdEN0QixLQUFLd0MsTUFBUXhDLEtBQUt3QixhQUFhLFFBQy9CeEIsS0FBS3NCLE1BQVF0QixLQUFLd0IsYUFBYSxRQUMvQixNQUFNaUIsRUFBY3pDLEtBQUtHLFdBQVdPLGNBQWMsS0FDbEQrQixFQUFZVixLQUFPL0IsS0FBS3dDLE1BQ3hCQyxFQUFZcEIsS0FBT3JCLEtBQUtzQixRQUlwQy9CLEVBQVF3QixRQUFVdUIsRUFDbEJBLEVBQWlCdEIsSUFBTSxhQUN2QnNCLEVBQWlCMUMsU0FBVyw2SCxvQkM3QjVCLElBQUk4QyxFQUFtQjFDLE1BQVFBLEtBQUswQyxpQkFBb0IsU0FBVUMsR0FDOUQsT0FBUUEsR0FBT0EsRUFBSUMsV0FBY0QsRUFBTSxDQUFFLFFBQVdBLElBRXhEdEQsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTXFELEVBQW1CSCxFQUFnQixFQUFRLE1BQzNDSSxFQUFlSixFQUFnQixFQUFRLE1BQ3ZDSyxFQUFhTCxFQUFnQixFQUFRLE1BQ3JDTSxFQUFlTixFQUFnQixFQUFRLE1BQzdDTyxlQUFlQyxPQUFPRixFQUFhakMsUUFBUUMsSUFBS2dDLEVBQWFqQyxTQUM3RGtDLGVBQWVDLE9BQU9ILEVBQVdoQyxRQUFRQyxJQUFLK0IsRUFBV2hDLFNBQ3pEa0MsZUFBZUMsT0FBT0wsRUFBaUI5QixRQUFRQyxJQUFLNkIsRUFBaUI5QixTQUNyRWtDLGVBQWVDLE9BQU9KLEVBQWEvQixRQUFRQyxJQUFLOEIsRUFBYS9CLFdDWHpEb0MsRUFBMkIsSUFHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLEdBQUdGLEVBQXlCRSxHQUMzQixPQUFPRixFQUF5QkUsR0FBVTlELFFBRzNDLElBQUkrRCxFQUFTSCxFQUF5QkUsR0FBWSxDQUdqRDlELFFBQVMsSUFPVixPQUhBZ0UsRUFBb0JGLEdBQVVHLEtBQUtGLEVBQU8vRCxRQUFTK0QsRUFBUUEsRUFBTy9ELFFBQVM2RCxHQUdwRUUsRUFBTy9ELFFDakJmNkQsQ0FBb0IsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEFydGljbGVGb290ZXJFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBBcnRpY2xlRm9vdGVyRWxlbWVudC50ZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zdCBmb290bm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3ViXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvb3Rub3Rlc0xlbmd0aCA9IGZvb3Rub3Rlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb290bm90ZXNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdG5vdGVzW2ldKTtcclxuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcnRpY2xlRm9vdGVyRWxlbWVudDtcclxuQXJ0aWNsZUZvb3RlckVsZW1lbnQudGFnID0gXCJhcnRpY2xlLWZvb3RlclwiO1xyXG5BcnRpY2xlRm9vdGVyRWxlbWVudC50ZW1wbGF0ZSA9IGBcbiAgICA8c3R5bGU+XG4gICAgICBociB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgICAgIGhlaWdodDogMC43NXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjOTVjMzc5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8YnIgLz5cbiAgICA8aHIgLz5cbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICBgO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEowYVdOc1pWOW1iMjkwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOHVMaTl6Y21NdlkyOXRjRzl1Wlc1MGN5OWhjblJwWTJ4bFgyWnZiM1JsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEUxQlFYRkNMRzlDUVVGeFFpeFRRVUZSTEZkQlFWYzdTVUV3UWpORU8xRkJRMFVzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGVWl4TlFVRk5MRkZCUVZFc1IwRkJkMElzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVONlJTeFJRVUZSTEVOQlFVTXNVMEZCVXl4SFFVRkhMRzlDUVVGdlFpeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVVnVSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGNFTXNTVUZCU1N4RFFVRkRMRlZCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPMGxCUlVRc2FVSkJRV2xDTzFGQlEyWXNUVUZCVFN4VFFVRlRMRWRCUVRSQ0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkRiRVVzUzBGQlN5eERRVU5NTEVOQlFVTTdVVUZEU0N4TlFVRk5MRTFCUVUwc1IwRkJaMElzU1VGQlNTeERRVUZETEZWQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRkxFTkJRVU03VVVGRGRFVXNUVUZCVFN4bFFVRmxMRWRCUVZjc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU5xUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM2hETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE4wTTdTVUZEU0N4RFFVRkRPenRCUVRsRFNDeDFRMEVyUTBNN1FVRTVRMmxDTEhkQ1FVRkhMRWRCUVZjc1owSkJRV2RDTEVOQlFVTTdRVUZGZGtJc05rSkJRVkVzUjBGQlZ6czdPenM3T3pzN096czdPenM3T3pzN096czdPMGRCY1VJeFF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEZhbmFyb05hdkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IEZhbmFyb05hdkVsZW1lbnQudGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZhbmFyb05hdkVsZW1lbnQ7XHJcbkZhbmFyb05hdkVsZW1lbnQudGFnID0gXCJmYW5hcm8tbmF2XCI7XHJcbkZhbmFyb05hdkVsZW1lbnQudGVtcGxhdGUgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBzdmcge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPG5hdj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCI+XG4gICAgICAgICAgPGltYWdlIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGhyZWY9XCIuLi8uLi9hc3NldHMvZmF2aWNvbi5zdmdcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGgxPmZhbmFyby5pbzwvaDE+XG4gICAgICA8L2E+XG4gICAgPC9uYXY+XG4gIGA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRnVZWEp2WDI1aGRpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OWpiMjF3YjI1bGJuUnpMMlpoYm1GeWIxOXVZWFl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hOUVVGeFFpeG5Ra0ZCYVVJc1UwRkJVU3hYUVVGWE8wbEJNRUoyUkR0UlFVTkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJSVklzVFVGQlRTeFJRVUZSTEVkQlFYZENMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZWtVc1VVRkJVU3hEUVVGRExGTkJRVk1zUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRkwwTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFZRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1VzUTBGQlF6dEpRVVZFTEdsQ1FVRnBRanRSUVVObUxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRemxDTEVOQlFVTTdPMEZCZEVOSUxHMURRWFZEUXp0QlFYUkRhVUlzYjBKQlFVY3NSMEZCVnl4WlFVRlpMRU5CUVVNN1FVRkZia0lzZVVKQlFWRXNSMEZCVnpzN096czdPenM3T3pzN096czdPenM3T3pzN08wZEJjVUl4UXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgRm9vdG5vdGVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCA9IFwiXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubmV4dEluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBGb290bm90ZUVsZW1lbnQudGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGV4dCA9PSBcIlwiKVxyXG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTmV4dEluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5lZGl0U3VwKCk7XHJcbiAgICAgICAgdGhpcy5lZGl0U3ViKCk7XHJcbiAgICB9XHJcbiAgICBjYWxjdWxhdGVOZXh0SW5kZXgoKSB7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGb290bm90ZXMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb290LW5vdGVcIik7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZGb290bm90ZXMgPSBjdXJyZW50Rm9vdG5vdGVzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLm5leHRJbmRleCA9IG51bWJlck9mRm9vdG5vdGVzO1xyXG4gICAgfVxyXG4gICAgZWRpdFN1cCgpIHtcclxuICAgICAgICBjb25zdCBzdXBBbmNob3IgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImFcIik7XHJcbiAgICAgICAgc3VwQW5jaG9yLmlubmVySFRNTCA9IHRoaXMubmV4dEluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc3VwQW5jaG9yLmhyZWYgPSBcIiNmb290bm90ZS1cIiArIHRoaXMubmV4dEluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3VwID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdXBcIik7XHJcbiAgICAgICAgc3VwLmlkID0gXCJmb290bm90ZS1iYXNlLVwiICsgdGhpcy5uZXh0SW5kZXgudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVkaXRTdWIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgc3ViQW5jaG9yLmlubmVySFRNTCA9IHRoaXMubmV4dEluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc3ViQW5jaG9yLmhyZWYgPSBcIiNmb290bm90ZS1iYXNlLVwiICsgdGhpcy5uZXh0SW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICBzdWJBbmNob3Iuc3R5bGUuY29sb3IgPSBGb290bm90ZUVsZW1lbnQuYW5jaG9yQ29sb3I7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1YlwiKTtcclxuICAgICAgICBzdWIuaWQgPSBcImZvb3Rub3RlLVwiICsgdGhpcy5uZXh0SW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICBzdWIuaW5uZXJIVE1MID0gXCI6IFwiICsgdGhpcy5fdGV4dDtcclxuICAgICAgICBzdWIucHJlcGVuZChzdWJBbmNob3IpO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXJ0aWNsZVwiKTtcclxuICAgICAgICBhcnRpY2xlLmFwcGVuZChzdWIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZvb3Rub3RlRWxlbWVudDtcclxuRm9vdG5vdGVFbGVtZW50LnRhZyA9IFwiZm9vdC1ub3RlXCI7XHJcbkZvb3Rub3RlRWxlbWVudC5hbmNob3JDb2xvciA9IFwiI0Q5QzA3QlwiO1xyXG5Gb290bm90ZUVsZW1lbnQudGVtcGxhdGUgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAke0Zvb3Rub3RlRWxlbWVudC5hbmNob3JDb2xvcn07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIHN1cCB7XG4gICAgICAgIGNvbG9yOiAke0Zvb3Rub3RlRWxlbWVudC5hbmNob3JDb2xvcn07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3VwPjxhPjwvYT48L3N1cD5cbiAgYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm05dmRHNXZkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12WTI5dGNHOXVaVzUwY3k5bWIyOTBibTkwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEUxQlFYRkNMR1ZCUVdkQ0xGTkJRVkVzVjBGQlZ6dEpRWGxDZEVRc1dVRkJXU3hQUVVGbExFVkJRVVU3VVVGRE0wSXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRlNSaXhWUVVGTExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlEyNUNMR05CUVZNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGVE5VSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRmJFSXNUVUZCVFN4UlFVRlJMRWRCUVhkQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRla1VzVVVGQlVTeERRVUZETEZOQlFWTXNSMEZCUnl4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSVGxETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxFTkJRVU1zVlVGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03U1VGa1JDeEpRVUZKTEVsQlFVazdVVUZEVGl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFXTkVMR2xDUVVGcFFqdFJRVU5tTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlJTeERRVUZETzFGQlF6bEVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCUlU4c2EwSkJRV3RDTzFGQlEzaENMRTFCUVUwc1QwRkJUeXhIUVVGblFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJSU3hEUVVGRE8xRkJRMmhGTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUTBGQlJTeERRVUZETzFGQlEyaEZMRTFCUVUwc2FVSkJRV2xDTEVkQlFWY3NaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZQTEU5QlFVODdVVUZEWWl4TlFVRk5MRk5CUVZNc1IwRkJjMElzU1VGQlNTeERRVUZETEZWQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRkxFTkJRVU03VVVGRE1VVXNVMEZCVXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJoRUxGTkJRVk1zUTBGQlF5eEpRVUZKTEVkQlFVY3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETVVRc1RVRkJUU3hIUVVGSExFZEJRV2RDTEVsQlFVa3NRMEZCUXl4VlFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlJTeERRVUZETzFGQlEyaEZMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJSVThzVDBGQlR6dFJRVU5pTEUxQlFVMHNVMEZCVXl4SFFVRnpRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJwRkxGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUkN4VFFVRlRMRU5CUVVNc1NVRkJTU3hIUVVGSExHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETDBRc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NaVUZCWlN4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOd1JDeE5RVUZOTEVkQlFVY3NSMEZCWjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEycEVMRWRCUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRiRU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVWMlFpeE5RVUZOTEU5QlFVOHNSMEZCWjBJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVVXNRMEZCUXp0UlFVTm9SU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNSQ0xFTkJRVU03TzBGQmRrVklMR3REUVhkRlF6dEJRWFpGYVVJc2JVSkJRVWNzUjBGQlZ5eFhRVUZYTEVOQlFVTTdRVUZGYkVJc01rSkJRVmNzUjBGQlZ5eFRRVUZUTEVOQlFVTTdRVUZGYUVNc2QwSkJRVkVzUjBGQlZ6czdPMmxDUVVjMVFpeGxRVUZsTEVOQlFVTXNWMEZCVnpzN096dHBRa0ZKTTBJc1pVRkJaU3hEUVVGRExGZEJRVmM3T3pzN1IwRkpla01zUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBMb2NhbExpbmtFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IobGluayA9IFwiXCIsIHRleHQgPSBcIlwiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBMb2NhbExpbmtFbGVtZW50LnRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH1cclxuICAgIGdldCBsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGluayA9PSBcIlwiIHx8IHRoaXMuX3RleHQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9saW5rID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpbm5lckFuY2hvciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcclxuICAgICAgICAgICAgaW5uZXJBbmNob3IuaHJlZiA9IHRoaXMuX2xpbms7XHJcbiAgICAgICAgICAgIGlubmVyQW5jaG9yLnRleHQgPSB0aGlzLl90ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBMb2NhbExpbmtFbGVtZW50O1xyXG5Mb2NhbExpbmtFbGVtZW50LnRhZyA9IFwibG9jYWwtbGlua1wiO1xyXG5Mb2NhbExpbmtFbGVtZW50LnRlbXBsYXRlID0gYFxuICAgIDxzdHlsZT5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI0U2N0Q0MDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGE+PC9hPlxuICBgO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzlqWVd4ZmJHbHVheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlqYjIxd2IyNWxiblJ6TDJ4dlkyRnNYMnhwYm1zdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4TlFVRnhRaXhuUWtGQmFVSXNVMEZCVVN4WFFVRlhPMGxCZDBKMlJDeFpRVUZaTEU5QlFXVXNSVUZCUlN4RlFVRkZMRTlCUVdVc1JVRkJSVHRSUVVNNVF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTlNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJXeENMRTFCUVUwc1VVRkJVU3hIUVVGM1FpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM3BGTEZGQlFWRXNRMEZCUXl4VFFVRlRMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUlM5RExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1ZVRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN1NVRnNRa1FzU1VGQlNTeEpRVUZKTzFGQlEwNHNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM0JDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRWxCUVVrN1VVRkRUaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEY0VJc1EwRkJRenRKUVdORUxHbENRVUZwUWp0UlFVTm1MRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGVFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUlN4RFFVRkRPMWxCUTNoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVVVzUTBGQlF6dFpRVVY0UXl4TlFVRk5MRmRCUVZjc1IwRkJjMElzU1VGQlNTeERRVUZETEZWQlFWY3NRMEZCUXl4aFFVRmhMRU5CUTI1RkxFZEJRVWNzUTBGRFNDeERRVUZETzFsQlJVZ3NWMEZCVnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTXZRanRKUVVOSUxFTkJRVU03TzBGQmFFUklMRzFEUVdsRVF6dEJRV2hFYVVJc2IwSkJRVWNzUjBGQlZ5eFpRVUZaTEVOQlFVTTdRVUZGYmtJc2VVSkJRVkVzUjBGQlZ6czdPenM3T3pzN1IwRlJNVU1zUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnRpY2xlX2Zvb3Rlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYXJ0aWNsZV9mb290ZXJcIikpO1xyXG5jb25zdCBmYW5hcm9fbmF2XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9mYW5hcm9fbmF2XCIpKTtcclxuY29uc3QgZm9vdG5vdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2Zvb3Rub3RlXCIpKTtcclxuY29uc3QgbG9jYWxfbGlua18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbG9jYWxfbGlua1wiKSk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShsb2NhbF9saW5rXzEuZGVmYXVsdC50YWcsIGxvY2FsX2xpbmtfMS5kZWZhdWx0KTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGZvb3Rub3RlXzEuZGVmYXVsdC50YWcsIGZvb3Rub3RlXzEuZGVmYXVsdCk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShhcnRpY2xlX2Zvb3Rlcl8xLmRlZmF1bHQudGFnLCBhcnRpY2xlX2Zvb3Rlcl8xLmRlZmF1bHQpO1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoZmFuYXJvX25hdl8xLmRlZmF1bHQudGFnLCBmYW5hcm9fbmF2XzEuZGVmYXVsdCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTeHBSa0ZCSzBRN1FVRkRMMFFzZVVWQlFYVkVPMEZCUTNaRUxIRkZRVUZ2UkR0QlFVTndSQ3g1UlVGQmRVUTdRVUZGZGtRc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eHZRa0ZCWjBJc1EwRkJReXhIUVVGSExFVkJRVVVzYjBKQlFXZENMRU5CUVVNc1EwRkJRenRCUVVNNVJDeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMR3RDUVVGbExFTkJRVU1zUjBGQlJ5eEZRVUZGTEd0Q1FVRmxMRU5CUVVNc1EwRkJRenRCUVVNMVJDeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlN4M1FrRkJiMElzUTBGQlF5eERRVUZETzBGQlEzUkZMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zYjBKQlFXZENMRU5CUVVNc1IwRkJSeXhGUVVGRkxHOUNRVUZuUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==