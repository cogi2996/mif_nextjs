export const QUERY_KEY = {
    // Movie
    newestMovies: (page, size) => ['newest_movies', { page, size }],
    randomMovies: 'random_movies',
    allMovies: (page, size) => ['all_movies', { page, size }],
    searchMoviesByTitle: (page, size, title) => ['search_movies_by_title', { page, size, title }],
    movieById: (id) => ['detail_movie', id],
    //Group
    groupsByOwnerId: (page, size) => ['groups_owner', { page, size }],
    userGroups: (page, size, id) => ['user_groups', { page, size, id }],
    groupsUserNotJoin: (size) => ['groups_user_not_join', { size }],
    detailGroup: (id) => ['group', id],
    memberGroup: (id) => ['member_group', id],
    pendingInvitations: (groupId, size) => ['pending_invitations', { groupId, size }],
    // Actor
    actorMovieography: (actorId) => ['actor_movieography', actorId],
    actorById: (actorId) => ['actor', actorId],
    topActors: (page, size) => ['top_actor', { page, size }],
    // Category
    allmovieCategories: 'all_categories',
    categoryById: (id) => ['category', id],
    // favoriteActors
    isActorFavorite: (actorId) => ['is_actor_favorite', actorId],
    // user
    userInfoById: (id) => ['user_info', id],
    // group_posts
    groupPosts: (groupId) => ['group_posts', { groupId }],
    // group_rules
    groupRules: (groupId) => ['group_rules', groupId]
}