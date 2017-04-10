;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhongyuanyinxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M965.9963 101.636157c0.659241-2.312207 1.277126-4.62563 1.829332-6.939054 2.585877-10.832465-1.875551-15.858262-5.175403-18.014781-1.434031-0.937776-3.206196-1.262531-4.888354-1.390243-0.495039-0.037706-0.99251-0.059599-1.488765-0.059599L816.595613 75.232479c0 0-7.513153 0-7.514369 0-7.303947 0-14.357334 0.389219-20.575116 4.693744-6.504831 4.502783-10.036998 11.320206-12.638687 18.709295-8.324432 23.639003-14.572621 48.046714-20.376857 72.413071-3.985851 16.734006-7.261376 33.613969-10.109976 50.576641-1.637154 9.751165-3.133217 19.524223-4.518595 29.314309l-142.977349 0c-0.287049-12.951279-0.257858-25.902557 0.029191-38.853836 0.261507-11.753212 0.754113-23.490613 1.465655-35.225581 0.620319-10.22431 1.389027-20.427942 2.352345-30.626709 0.789386-8.367003 1.648101-16.714545 2.692912-25.054789 0.878176-7.013249 4.840917-30.41872 6.038984-35.097868 3.003072-11.726454-8.284294-10.843412-8.284294-10.843412L426.444425 75.237345c-10.603799-0.197042-11.826191 5.762881-11.472245 9.734136 0.249344 2.799948 1.031432 5.565839 1.41457 8.357272 11.507518 85.566257 6.259136 157.610785 6.259136 157.610785L280.932284 250.939538c-3.277958-46.708772-25.52915-121.538652-33.133526-146.044885-1.408488-4.540489-2.589526-9.240314-4.292361-13.677416-2.548171-6.671465-5.997629-10.611096-9.431275-12.909924-6.035335-4.039369-15.933673-2.773189-22.780287-2.773189L70.347509 75.534124c-19.324748 0-12.883165 18.828493-12.883165 18.828493 115.92781 410.271404 20.786754 768.400774 3.546763 827.019663-1.145765 3.89706-2.44965 7.710195-3.77178 11.548872-3.914089 11.36156-0.842903 17.3227 2.407079 20.320907 3.420266 3.155111 8.093333 2.776838 12.40029 2.776838 0 0 113.101103 0.27367 145.154545-0.114333 6.335764-0.076628 12.897761-0.858716 18.243447-4.545354 8.412006-5.800587 12.244602-15.854613 14.899809-26.067976 3.38621-13.030339 6.512129-26.134873 9.855767-39.178591 7.874397-30.722798 18.622936-75.305458 22.937191-105.798373l142.977349 0c1.262531 57.008493-3.504192 106.382202-7.132447 134.725895-1.213878 9.481144-3.236603 18.615639-5.551243 27.872981-1.069137 4.275333-1.522821 9.382622 2.965366 11.835922 4.359258 2.382753 9.925097 1.264963 14.65533 1.264963 0.001216 0 135.019026 0 161.888551 0 3.408103 0 6.956082 0.345432 10.26688-0.655592 4.898084-1.48025 5.927083-5.171754 5.872349-8.166312-0.10217-5.584083-1.745406-11.230199-2.435054-16.777793-10.232824-82.229916-5.28852-150.101282-5.28852-150.101282l141.712385 0c3.963957 56.486695 35.675616 154.099296 35.675616 154.099296 4.105049 14.166373 13.08264 18.919716 18.897823 20.510651 3.915305 1.070354 8.016705 0.795467 12.028099 0.795467L953.654393 955.728468c19.324748 0 12.883165-18.828493 12.881949-18.828493-59.531122-195.333452-72.218461-410.312758-46.843782-612.258076 7.199344-57.296758 17.778817-114.176322 31.738417-170.212983C953.68845 145.3674 963.540568 110.25372 965.9963 101.636157zM299.117349 602.935053c4.974712-96.888895 4.11478-174.611163 4.11478-174.611163l421.652425 0c-4.974712 96.887679-4.11478 174.611163-4.11478 174.611163L299.117349 602.935053z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)