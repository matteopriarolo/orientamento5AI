div = document.querySelector('header');

console.log(div);

div.classList.add('container-fluid', 'position-relative');
div.innerHTML = `
    <div class="row d-flex align-items-center">
        <div class="col-4">
            <img id="logo" src="assets/logo.png" alt="LogoScuola">
        </div>
        <div class="col-4 text-center">
            <h4>ORIENTAMENTO IN ENTRATA - SCUOLA APERTA</h4>
            <h1>ISTITUTO TECNICO</h1>
        </div>
        <div class="col-4 d-flex justify-content-end position-relative">
            <nav id="nav-circle" class="d-flex gap-3 center">
                <div>
                    <a class="nav-link text-white fw-bold" href="index.html">Home</a>
                    <a class="nav-link text-white fw-bold" href="tabella.html">Quadro Orario</a>
                    <a class="nav-link text-white fw-bold" href="indexMaterie.html">Materie</a>
                    <a class="nav-link text-white fw-bold" href="esperienze.html">Progetti</a>
                    <a class="nav-link text-white fw-bold" href="lavoro.html">Lavoro</a>
                    <a class="nav-link text-white fw-bold" href="motivi.html">Perche' scegliere questa scuola</a>
                </div>
            </nav>
        </div>
    </div>
`;
