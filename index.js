(()=>{"use strict";var t={149:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GlobalEvents=void 0,e.GlobalEvents=class{constructor(){this.onclick=t=>{if(t.target instanceof HTMLAnchorElement){t.preventDefault();const e=t.target;if(e.getAttribute("localLink")?.length>0){const t=e.getAttribute("localLink");console.log(t)}else console.log("Not a local link.")}else console.log("Not a link")},document.onclick=this.onclick}}},607:(t,e,o)=>{new(o(149).GlobalEvents)}},e={};!function o(l){if(e[l])return e[l].exports;var n=e[l]={exports:{}};return t[l](n,n.exports,o),n.exports}(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW5hcm8uaW8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWxfZXZlbnRzLnRzIiwid2VicGFjazovL2ZhbmFyby5pby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mYW5hcm8uaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmFuYXJvLmlvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkdsb2JhbEV2ZW50cyIsInRoaXMiLCJvbmNsaWNrIiwiZXYiLCJ0YXJnZXQiLCJIVE1MQW5jaG9yRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiZ2V0QXR0cmlidXRlIiwibGVuZ3RoIiwibG9jYWxMaW5rIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyJdLCJtYXBwaW5ncyI6InNDQUNBQSxPQUFPQyxlQUFlQyxFQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0REQsRUFBUUUsa0JBQWUsRUFzQnZCRixFQUFRRSxhQXJCUixNQUNJLGNBQ0lDLEtBQUtDLFFBQVdDLElBQ1osR0FBSUEsRUFBR0Msa0JBQWtCQyxrQkFBbUIsQ0FDeENGLEVBQUdHLGlCQUNILE1BQU1DLEVBQVNKLEVBQUdDLE9BQ2xCLEdBQUlHLEVBQU9DLGFBQWEsY0FBY0MsT0FBUyxFQUFHLENBQzlDLE1BQU1DLEVBQVlILEVBQU9DLGFBQWEsYUFDdENHLFFBQVFDLElBQUlGLFFBR1pDLFFBQVFDLElBQUksMEJBSWhCRCxRQUFRQyxJQUFJLGVBR3BCQyxTQUFTWCxRQUFVRCxLQUFLQyxXLGNDbEJoQyxJQUR3QixFQUFRLEtBQ1pGLGdCQ0ZoQmMsRUFBMkIsSUFHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLEdBQUdGLEVBQXlCRSxHQUMzQixPQUFPRixFQUF5QkUsR0FBVWxCLFFBRzNDLElBQUltQixFQUFTSCxFQUF5QkUsR0FBWSxDQUdqRGxCLFFBQVMsSUFPVixPQUhBb0IsRUFBb0JGLEdBQVVDLEVBQVFBLEVBQU9uQixRQUFTaUIsR0FHL0NFLEVBQU9uQixRQ2xCZmlCLENBQW9CLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdsb2JhbEV2ZW50cyA9IHZvaWQgMDtcclxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25jbGljayA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXYudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yLmdldEF0dHJpYnV0ZShcImxvY2FsTGlua1wiKT8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsTGluayA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJsb2NhbExpbmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxMaW5rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGEgbG9jYWwgbGluay5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBhIGxpbmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSB0aGlzLm9uY2xpY2s7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HbG9iYWxFdmVudHMgPSBHbG9iYWxFdmVudHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyeHZZbUZzWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjF3YjI1bGJuUnpMMmRzYjJKaGJGOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1RVRkJZU3haUVVGWk8wbEJRM1pDTzFGQlNWRXNXVUZCVHl4SFFVRkhMRU5CUVVNc1JVRkJZeXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3haUVVGWkxHbENRVUZwUWl4RlFVRkZPMmRDUVVNeFF5eEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1owSkJRM0JDTEUxQlFVMHNUVUZCVFN4SFFVRnpRaXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzJkQ1FVTTFReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1RVRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEYWtRc1RVRkJUU3hUUVVGVExFZEJRVmNzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVVc1EwRkJRenR2UWtGRE5VUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHBRa0ZEZUVJN2NVSkJRVTA3YjBKQlEwd3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMmxDUVVOc1F6dGhRVU5HTzJsQ1FVRk5PMmRDUVVOTUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1lVRkRNMEk3VVVGRFNDeERRVUZETEVOQlFVTTdVVUZvUWtFc1VVRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTJ4RExFTkJRVU03UTBGblFrWTdRVUZ1UWtRc2IwTkJiVUpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdsb2JhbF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZ2xvYmFsX2V2ZW50c1wiKTtcclxubmV3IGdsb2JhbF9ldmVudHNfMS5HbG9iYWxFdmVudHMoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTdzRSRUZCTUVRN1FVRkZNVVFzU1VGQlNTdzBRa0ZCV1N4RlFVRkZMRU5CUVVNaWZRPT0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9