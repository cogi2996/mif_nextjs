export const QUERY_KEY = {
    newestMovies: (page, size) => ['newest_movies', { page, size }],
    randomMovies: 'random_movies',
    allMovies: (page, size) => ['all_movies', { page, size }],
    searchMoviesByTitle: (page, size, title) => ['search_movies_by_title', { page, size, title }],
    movieById: (id) => ['detail_movie', id],
}