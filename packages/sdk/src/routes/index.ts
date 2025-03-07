export const routes = [
  "/assets/v1",
  "/attributes/v1",
  "/collection/v1",
  "/collection/v2",
  "/collection/v3",
  "/collections/v1",
  "/collections/v2",
  "/collections/v3",
  "/collections/v4",
  "/collections/v5",
  "/collections/v6",
  "/collections/v7",
  "/cross-posting-orders/v1",
  "/orders/v1",
  "/orders/v2",
  "/owners/v1",
  "/owners/v2",
  "/sales/v1",
  "/sales/v2",
  "/sales/v3",
  "/sales/v4",
  "/sales/v5",
  "/sales/v6",
  "/sources/v1",
  "/stats/v1",
  "/stats/v2",
  "/tokens/v1",
  "/tokens/v2",
  "/tokens/v3",
  "/tokens/v4",
  "/tokens/v5",
  "/tokens/v6",
  "/tokens/v7",
  "/tokens/v8",
  "/transfers/v2",
  "/transfers/v3",
  "/transfers/v4",
  "/api-keys/{key}/rate-limits",
  "/chain/stats/v1",
  "/collections/activity/v4",
  "/collections/activity/v5",
  "/collections/activity/v6",
  "/collections/autocomplete/v1",
  "/collections/daily-volumes/v1",
  "/collections/top-selling/v1",
  "/collections/top-selling/v2",
  "/collections/trending/v1",
  "/collections/trending-mints/v1",
  "/collections/{collectionOrSlug}/v1",
  "/currencies/conversion/v1",
  "/events/asks/v2",
  "/events/asks/v3",
  "/events/bids/v1",
  "/events/bids/v2",
  "/events/bids/v3",
  "/events/orders/v1",
  "/execute/cancel/v2",
  "/liquidity/users/v1",
  "/liquidity/users/v2",
  "/orders/all/v1",
  "/orders/all/v2",
  "/orders/asks/v1",
  "/orders/asks/v2",
  "/orders/asks/v3",
  "/orders/asks/v4",
  "/orders/asks/v5",
  "/orders/bids/v1",
  "/orders/bids/v2",
  "/orders/bids/v3",
  "/orders/bids/v4",
  "/orders/bids/v5",
  "/orders/bids/v6",
  "/orders/depth/v1",
  "/orders/executed/v1",
  "/owners/common-collections/v1",
  "/owners/cross-collections/v1",
  "/redirect/logo/v1",
  "/redirect/token/v1",
  "/sales/bulk/v1",
  "/search/activities/v1",
  "/search/collections/v1",
  "/search/collections/v2",
  "/sync/asks/v1",
  "/tokens/bootstrap/v1",
  "/tokens/details/v2",
  "/tokens/details/v3",
  "/tokens/details/v4",
  "/tokens/floor/v1",
  "/tokens/ids/v1",
  "/transfers/bulk/v1",
  "/transfers/bulk/v2",
  "/users/activity/v2",
  "/users/activity/v3",
  "/users/activity/v4",
  "/users/activity/v5",
  "/users/activity/v6",
  "/collections/{collection}/marketplace-configurations/v1",
  "/collections/{collection}/top-traders/v1",
  "/collections/{collection}/top-bids/v1",
  "/collections/{collection}/attributes/v1",
  "/collections/{collection}/activity/v2",
  "/collections/{collection}/activity/v1",
  "/collections/{collection}/activity/v3",
  "/collections/{collection}/owners-distribution/v1",
  "/collections/{collection}/supported-marketplaces/v1",
  "/collections-sets/{collectionsSetId}/owners-distribution/v1",
  "/events/collections/floor-ask/v1",
  "/events/collections/floor-ask/v2",
  "/events/collections/top-bid/v1",
  "/events/collections/top-bid/v2",
  "/events/tokens/floor-ask/v2",
  "/events/tokens/floor-ask/v3",
  "/events/tokens/floor-ask/v4",
  "/oracle/collections/bid-ask-midpoint/v1",
  "/oracle/collections/floor-ask/v4",
  "/oracle/collections/floor-ask/v5",
  "/oracle/collections/floor-ask/v6",
  "/oracle/collections/top-bid/v2",
  "/oracle/collections/top-bid/v3",
  "/oracle/tokens/status/v2",
  "/oracle/tokens/status/v3",
  "/tokens/flag/changes/v1",
  "/tokens/{token}/activity/v4",
  "/tokens/{token}/activity/v2",
  "/tokens/{token}/activity/v1",
  "/tokens/{token}/activity/v3",
  "/tokens/{token}/activity/v5",
  "/transactions/{txHash}/synced/v1",
  "/users/{user}/tokens/v7",
  "/users/{user}/tokens/v5",
  "/users/{user}/tokens/v3",
  "/users/{user}/tokens/v1",
  "/users/{user}/collections/v2",
  "/users/{user}/activity/v1",
  "/users/{user}/collections/v1",
  "/users/{user}/collections/v3",
  "/users/{user}/positions/v1",
  "/users/{user}/tokens/v2",
  "/users/{user}/tokens/v4",
  "/users/{user}/tokens/v6",
  "/users/{user}/tokens/v8",
  "/collections/{collection}/attributes/explore/v4",
  "/collections/{collection}/attributes/explore/v2",
  "/collections/{collection}/attributes/all/v4",
  "/collections/{collection}/attributes/all/v2",
  "/collections/{collection}/attributes/all/v1",
  "/collections/{collection}/attributes/all/v3",
  "/collections/{collection}/attributes/static/v1",
  "/collections/{collection}/attributes/explore/v1",
  "/collections/{collection}/attributes/explore/v3",
  "/collections/{collection}/attributes/explore/v5",
  "/orders/users/{user}/top-bids/v3",
  "/orders/users/{user}/top-bids/v1",
  "/orders/users/{user}/top-bids/v2",
  "/orders/users/{user}/top-bids/v4",
  "/redirect/collections/{collection}/image/v1",
  "/redirect/currency/{address}/icon/v1",
  "/redirect/sources/{source}/logo/v2",
  "/redirect/tokens/{token}/image/v1",
  "/redirect/sources/{source}/tokens/{token}/link/v2",
  "/collections/{collection}/community/v1",
  "/api-keys",
  "/collections-sets/v1",
  "/contracts-sets/v1",
  "/order/v2",
  "/order/v3",
  "/order/v4",
  "/seaport/offers",
  "/token-sets/v1",
  "/token-sets/v2",
  "/collections/disable-metadata/v1",
  "/collections/refresh/v1",
  "/collections/refresh/v2",
  "/collections/spam-status/v1",
  "/execute/auth-signature/v1",
  "/execute/bid/v4",
  "/execute/bid/v5",
  "/execute/buy/v5",
  "/execute/buy/v6",
  "/execute/buy/v7",
  "/execute/call/v1",
  "/execute/cancel/v3",
  "/execute/cancel-signature/v1",
  "/execute/deposit/v1",
  "/execute/list/v4",
  "/execute/list/v5",
  "/execute/mint/v1",
  "/execute/permit-signature/v1",
  "/execute/pre-signature/v1",
  "/execute/results/v1",
  "/execute/sell/v6",
  "/execute/sell/v7",
  "/execute/solve/v1",
  "/execute/status/v1",
  "/execute/transfer/v1",
  "/orders/invalidate/v1",
  "/tokens/disable-metadata/v1",
  "/tokens/flag/v1",
  "/tokens/refresh/v1",
  "/tokens/simulate-floor/v1",
  "/tokens/simulate-top-bid/v1",
  "/tokens/spam-status/v1",
  "/collections/{collection}/override/v1",
  "/execute/solve/capacity/v1",
  "/management/mints/simulate/v1",
  "/management/orders/simulate/v1"
];