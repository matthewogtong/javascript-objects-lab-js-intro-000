var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.concat(object[key] = value)
  return recipes
}
