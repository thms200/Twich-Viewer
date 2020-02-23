export function resortByIdOrder(byId, allIds) {
  const result = allIds.map((id)=> {
    return byId[id];
  })
  return result;
}
