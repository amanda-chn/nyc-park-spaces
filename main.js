// const googleLayer = d3.select("#image")
// const greenLayer = d3.select("#greenLayer")
// const grayLayer = d3.select("#grayLayer")

// function hideAllLayers() {
// 	greenLayer.classed("hide", true)
//     grayLayer.classed("hide", true)
//     googleLayer.classed("hide", true)

// }

// hideAllLayers()
// d3.select("#step-one").on('stepin', function(e){
//     (indianLayer.classed("hide"))
// })
// 


// tree map
//base map
d3.selectAll(".g-inaccessibleParkTypeLabels").classed("hidden", true)
d3.selectAll(".g-inaccessibleText").classed("hidden", true)
d3.selectAll(".g-greenparkTypeLabels").classed("hidden", true)



//Scrollytelling
d3.select("#step-1").on('stepin', function(e){
  console.log("stepping into step one")
  d3.selectAll(".g-greenparkTypeLabels").classed("hidden", false)
  d3.selectAll(".g-accessibleText").classed("hidden", true)
  d3.selectAll(".g-inaccessibleParkTypeLabels").classed("hidden", false)

  
})

d3.select("#step-2").on('stepin', function(e){
  console.log("stepping into step two")
  d3.selectAll("[data-name='gray'] polygon").style('fill', '#888888').style('opacity', .1)
  d3.selectAll("[data-name='gray'] rect").style('fill', '#888888').style('opacity', .1)
  d3.selectAll("[data-name='gray'] path").style('fill', '#888888').style('opacity', .1)


})

d3.select("#step-3").on('stepin', function(e){
  console.log("stepping into step three")
  // d3.selectAll("[data-name='gray'] polygon").style('hidden', true)
  // d3.selectAll("[data-name='gray'] rect").style('hidden', true)
  // d3.selectAll("[data-name='gray'] path").classed('hidden', true)
  // d3.selectAll(".g-inaccessibleParkTypeLabels").classed("hidden", true)


})

//step-out
d3.select("#step-0").on('stepout', function(e){
  console.log("stepping out of step 0")
  d3.selectAll("[data-name='gray'] polygon").style('fill', '#B2DBAB').style('opacity', 1)
  d3.selectAll("[data-name='gray'] rect").style('fill', '#B2DBAB').style('opacity', 1)
  d3.selectAll("[data-name='gray'] path").style('fill', '#B2DBAB').style('opacity', 1)
})
d3.select("#step-1").on('stepout', function(e){
  console.log("stepping out of step 1")
  d3.selectAll(".g-inaccessibleParkTypeLabels").classed("hidden", true)
  d3.selectAll(".g-greenparkTypeLabels").classed("hidden", true)
  d3.selectAll(".g-accessibleText").classed("hidden", false)
})
d3.select("#step-2").on('stepout', function(e){
  console.log("stepping out of step two")
  d3.selectAll("[data-name='gray'] polygon").style('fill', '#B2DBAB').style('opacity', 1)
  d3.selectAll("[data-name='gray'] rect").style('fill', '#B2DBAB').style('opacity', 1)
  d3.selectAll("[data-name='gray'] path").style('fill', '#B2DBAB').style('opacity', 1)
  d3.selectAll(".g-inaccessibleParkTypeLabels").classed("hidden", false)



})


// park map
//hide what you don't want to show first
d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", true)
d3.selectAll("[data-name='commArrows'] path").classed("hidden", true)
d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", true)
d3.selectAll("[data-name='parkArrows'] path").classed("hidden", true)
d3.selectAll(".g-triangles-labels").classed("hidden", true)
d3.selectAll(".g-playgrounds-labels").classed("hidden", true)
d3.selectAll(".g-parks-labels").classed("hidden", true)
d3.selectAll(".g-commgardens-labels").classed("hidden", true)
// d3.selectAll("[data-name='playgroundLots'] path").classed("hidden", true)


//step-in
d3.select("#step-one").on('stepin', function(e){
    console.log("stepping into step one")
    
    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", false)
    d3.selectAll(".g-parks-labels").classed("hidden", false)
    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)



  })

d3.select("#step-two").on('stepin', function(e){
    console.log("stepping into step one")

    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", true)
    d3.selectAll(".g-parks-labels").classed("hidden", true)
    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", false)
    d3.selectAll(".g-triangles-labels").classed("hidden", false)

    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', 1)
    // d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', .50)
  })

  d3.select("#step-three").on('stepin', function(e){
    console.log("stepping into step one")

    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", true)
    d3.selectAll(".g-parks-labels").classed("hidden", true)
    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", false)
    d3.selectAll(".g-triangles-labels").classed("hidden", false)

    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', .50)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .5)
    // d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', .50)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', .50)
  })


d3.select("#step-four").on('stepin', function(e){
    console.log("stepping into step four")

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", true)
    d3.selectAll(".g-triangles-labels").classed("hidden", true)

    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", false)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", false)

    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', 1)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='commLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', 'gray').style('opacity', .25)
  })

  d3.select("#step-five").on('stepin', function(e){
    console.log("stepping into step four")

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", true)
    d3.selectAll(".g-triangles-labels").classed("hidden", true)

    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", false)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .5)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='commLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', 'gray').style('opacity', .25)
  })

d3.select("#step-six").on('stepin', function(e){
    console.log("stepping into step six")
  
    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", true)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", true)

    d3.selectAll("[data-name='commArrows'] path").classed("hidden", false)
    d3.selectAll(".g-commgardens-labels").classed("hidden", false)

    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='commLots'] path").style('fill', 'gray').style('opacity', 1)
    // d3.selectAll("[data-name='parkLots'] path").style('fill', 'gray').style('opacity', .25)

  })


d3.select("#step-eight").on('stepin', function(e){
    console.log("stepping into step eight")

    d3.selectAll("[data-name='commArrows'] path").classed("hidden", false)
    d3.selectAll(".g-commgardens-labels").classed("hidden", false)
    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", false)
    d3.selectAll(".g-parks-labels").classed("hidden", false)


    d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)

  })

  d3.select("#step-nine").on('stepin', function(e){
    console.log("stepping into step nine")
    d3.selectAll("[data-name='commArrows'] path").classed("hidden", true)
    d3.selectAll(".g-commgardens-labels").classed("hidden", true)
    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", false)
    d3.selectAll(".g-parks-labels").classed("hidden", false)


    // d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .25)
    // d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .25)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', .50)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })

//step-out
d3.select("#step-nine").on('stepout', function(e){
    d3.selectAll("[data-name='commArrows'] path").classed("hidden", false)
    d3.selectAll(".g-commgardens-labels").classed("hidden", false)
    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", false)
    d3.selectAll(".g-parks-labels").classed("hidden", false)


    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', .50)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', .50)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })

d3.select("#step-eight").on('stepout', function(e){
    console.log("stepping out of step eight")
    d3.selectAll("[data-name='commArrows'] path").classed("hidden", false)
    d3.selectAll(".g-commgardens-labels").classed("hidden", false)
    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", true)
    d3.selectAll(".g-parks-labels").classed("hidden", true)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
    
  })

d3.select("#step-six").on('stepout', function(e){
    console.log("stepping out of step six")

    d3.selectAll("[data-name='commArrows'] path").classed("hidden", true)
    d3.selectAll(".g-commgardens-labels").classed("hidden", true)
    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", false)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
    
  })

  d3.select("#step-five").on('stepout', function(e){
    console.log("stepping out of step six")

    d3.selectAll("[data-name='commArrows'] path").classed("hidden", true)
    d3.selectAll(".g-commgardens-labels").classed("hidden", true)
    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", false)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .50)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
    
  })

d3.select("#step-four").on('stepout', function(e){
    console.log("stepping out of step four")

    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", true)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", true)

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", false)
    d3.selectAll(".g-triangles-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity',1)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', 'gray').style('opacity', .5)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })

  d3.select("#step-three").on('stepout', function(e){
    console.log("stepping out of step four")

    d3.selectAll("[data-name='playgroundArrows'] path").classed("hidden", true)
    d3.selectAll(".g-playgrounds-labels").classed("hidden", true)

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", false)
    d3.selectAll(".g-triangles-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity',1)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })

  d3.select("#step-two").on('stepout', function(e){
    console.log("stepping out of step two")

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", true)
    d3.selectAll(".g-triangles-labels").classed("hidden", true)

    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", false)
    d3.selectAll(".g-parks-labels").classed("hidden", false)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })

  d3.select("#step-one").on('stepout', function(e){
    console.log("stepping out of step one")

    d3.selectAll("[data-name='triangleArrows'] path").classed("hidden", true)
    d3.selectAll(".g-triangles-labels").classed("hidden", true)

    d3.selectAll("[data-name='parkArrows'] path").classed("hidden", true)
    d3.selectAll(".g-parks-labels").classed("hidden", true)

    d3.selectAll("[data-name='playgroundLots'] path").style('fill', '#389B2A').style('opacity',1)
    d3.selectAll("[data-name='trianglesLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='commLots'] path").style('fill', '#389B2A').style('opacity', 1)
    d3.selectAll("[data-name='parkLots'] path").style('fill', '#389B2A').style('opacity', 1)
  })


//set up scrollama
const scroller = scrollama();

scroller
  .setup({
      step: "#scrolly .scrolly-overlay .step",
      offset: 0.85,
      debug: false
  })
  .onStepEnter((response) => {
    d3.select(response.element).dispatch('stepin');
  })
  .onStepExit((response) => {
    console.log("step exit", console.log("step exit", response))
    // Only trigger stepout if scrolling up
    if (response.direction === "up"){
        console.log("triggering step out")
        d3.select(response.element)
        .dispatch('stepout');
    }
})


window.addEventListener("resize", scroller.resize);


// <!-- ai2html resizer script -->
(function() {
// only want one resizer on the page
if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;
document.documentElement.className += " g-resizer-v3-init";
// require IE9+
if (!("querySelector" in document)) return;
function resizer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
        widthById = {};
    elements.forEach(function(el) {
        var parent = el.parentNode,
            width = widthById[parent.id] || parent.getBoundingClientRect().width,
            minwidth = el.getAttribute("data-min-width"),
            maxwidth = el.getAttribute("data-max-width");
        widthById[parent.id] = width;

        if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
    try {
        if (window.parent && window.parent.$) {
            window.parent.$("body").trigger("resizedcontent", [window]);
        }
        if (window.require) {
            require(['foundation/main'], function() {
                require(['shared/interactive/instances/app-communicator'], function(AppCommunicator) {
                    AppCommunicator.triggerResize();
                });
            });
        }
    } catch(e) { console.log(e); }
}

document.addEventListener('DOMContentLoaded', resizer);
// feel free to replace throttle with _.throttle, if available
window.addEventListener('resize', throttle(resizer, 200));        

function throttle(func, wait) {
    // from underscore.js
    var _now = Date.now || function() { return new Date().getTime(); },
        context, args, result, timeout = null, previous = 0;
    var later = function() {
        previous = _now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = _now(), remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
})();
