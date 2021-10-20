const pokemonRepository = function() { const e = [],
        t = "https://pokeapi.co/api/v2/pokemon/?limit=300",
        n = document.getElementById("searchbar");

    function i(t) { "object" == typeof t && e.push(t) }

    function o(e) { const t = e.detailsUrl; return fetch(t).then(function(e) { return e.json() }).then(function(t) { e.imageUrl = t.sprites.front_default, e.height = t.height, e.weight = t.weight, e.type = t.types, e.ability = t.abilities }).catch(function(e) { console.error(e) }) }

    function a(e) { o(e).then(function() { s(e) }) }
    n.addEventListener("input", function() { let e = document.querySelectorAll(".group-list-item"),
            t = n.value.toUpperCase();
        e.forEach(function(e) { e.innerText.toUpperCase().indexOf(t) > -1 ? e.style.display = "" : e.style.display = "none" }) }); let l = document.querySelector("#exampleModal");

    function s(e) { let t = $(".modal-title"),
            n = $(".modal-body");
        $(".modal-header");
        t.empty(), n.empty(); let i = $("<h1>" + e.name + "</h1>"),
            o = document.createElement("img");
        o.classList.add("pokeImage"), o.src = e.imageUrl; let a = document.createElement("p"),
            s = e.height / 10,
            c = e.weight / 10,
            r = [],
            d = [];
        Object.keys(e.type).forEach(t => { r.push(e.type[t].type.name) }), Object.keys(e.ability).forEach(t => { d.push(e.ability[t].ability.name) }), a.innerText = "Height: " + s + " m \r\nWeight: " + c + " kg \r\nTypes: " + r + "\r\nAbilities: " + d, t.append(i), n.append(o), n.append(a), l.classList.add("is-visible") }

    function c() { l.classList.remove("is-visible") } return window.addEventListener("keydown", e => { "Escape" === e.key && l.classList.contains("is-visible") && c() }), l.addEventListener("click", e => { e.target === l && c() }), { getAll: function() { return e }, add: i, addListItem: function(e) { let t = document.querySelector(".pokemon-list"),
                n = document.createElement("li");
            n.classList.add("group-list-item", "col-xl-2", "col-lg-4", "col-md-6"); let i = document.createElement("button");
            i.innerText = e.name, i.classList.add("button-class", "btn", "btn-warning", "btn-block"), i.setAttribute("data-target", "#exampleModal"), i.setAttribute("data-toggle", "modal"), i.addEventListener("click", function() { a(e) }), n.appendChild(i), t.appendChild(n) }, loadList: function() { return fetch(t).then(function(e) { return e.json() }).then(function(e) { e.results.forEach(function(e) { i({ name: e.name, detailsUrl: e.url }) }) }).catch(function(e) { console.error(e) }) }, loadDetails: o, showDetails: a, showModal: s, hideModal: c } }();
pokemonRepository.loadList().then(function() { pokemonRepository.getAll().forEach(function(e) { pokemonRepository.addListItem(e) }) });