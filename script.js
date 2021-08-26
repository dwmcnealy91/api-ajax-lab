fetch("https://www.reddit.com/r/aww/.json")
.then((res) => res.json())
.then((data) => {
    for ( const image of data.data.children) {
        const sectionEl = document.createElement("section");
        sectionEl.cl


    }
})
