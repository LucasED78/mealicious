import { Meal } from '~/store/meal'

export default (meals: Meal[]): Meal[] => {
  if (!meals.length) { return [] }

  meals.forEach((meal) => {
    let strings = [] as string[][]
    Object.keys(meal).forEach((key) => {
      if (key.includes('strIngredient')) {
        const itemNumber = key.split('strIngredient')[1] as unknown as number

        strings = [
          ...strings,
          [
            (meal as unknown as {[key: string]: string})[key],
            (meal as unknown as {[key: string]: string})[`strMeasure${itemNumber}`]
          ]
        ]
      }
    })

    meal.ingredientsAndMeasures = strings

    strings = []
  })

  return meals
}
