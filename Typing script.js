$(document).ready(function(){
    new TypeIt('#codeit', {
        speed: 100,
        startDelay: 900,
        loop: true
    })
    .type('<em class="c-braces" style="margin-right: 6px;">👕</em><em class="c-braces">☕</em>')
    .pause(500)
    .delete(1)
    .pause(300)
    .type('<em>Ali-Garage </em>')
    .pause(750)
    .type('<em>&</em>')
    .pause(750)
    .type('<em> OsSon café</em><em class="c-braces">☕</em>')
    .pause(750)
    .delete(21)
    .pause(1500)
    .go();
});
