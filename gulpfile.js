var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.browserify('DataTable.js', 'build', 'src');
});
