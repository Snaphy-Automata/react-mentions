const countSuggestions = suggestions => {
  const vals = Object.keys(suggestions).map(function (key) {
    return suggestions[key];
  });
  return vals.reduce(
    (acc, { results }) => acc + results.length,
    0
  )
}

export default countSuggestions
