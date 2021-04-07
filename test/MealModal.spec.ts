import { mount, Wrapper } from '@vue/test-utils'
import ModalMeal from '@/components/MealModal.vue'
import { Meal } from '~/store/meals'

describe('MealModal', () => {
  let wrapper: Wrapper<any>
  let meal: Meal

  beforeAll(() => {
    meal = {
      idMeal: '1239',
      ingredientsAndMeasures: [
        ['ing', 'meas']
      ],
      strArea: 'British',
      strCategory: 'Meal',
      strInstructions: 'lorem ipsum',
      strMeal: 'meal',
      strMealThumb: 'thumb'
    } as Meal

    wrapper = mount(ModalMeal, {
      propsData: {
        meal
      },
      stubs: {
        FontAwesomeIcon: true,
        Modal: true
      }
    })
  })

  test('should render the meal info correctly', () => {
    const name = wrapper.find('[data-testid="name"]').text()
    const ingredients = wrapper.find('[data-testid="ingredients"]').text()
    const instructions = wrapper.find('[data-testid="instructions"]').text()
    const img = wrapper.find('[data-testid="image"]').attributes('src')

    expect(name).toBe(meal.strMeal)
    expect(ingredients).toBeTruthy()
    expect(instructions).toBe(meal.strInstructions)
    expect(img).toBe(meal.strMealThumb)
  })
})
