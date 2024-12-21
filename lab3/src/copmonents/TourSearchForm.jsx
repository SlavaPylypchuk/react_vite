import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TourSearchForm.css';

const schema = yup.object().shape({
  country_to: yup.string().required('Виберіть країну прибуття'),
  townfrom: yup.string().required('Виберіть місто відправлення'),
  search_tour_date_from: yup.date().required('Вкажіть дату виліту'),
  nights_from: yup
    .number()
    .typeError('Вкажіть кількість ночей')
    .min(1, 'Мінімум 1 ніч')
    .required('Вкажіть кількість ночей'),
  adult_count: yup
    .number()
    .typeError('Вкажіть кількість дорослих')
    .min(1, 'Мінімум 1 дорослий')
    .required('Вкажіть кількість дорослих'),
  currency: yup.string().required('Виберіть валюту'),
  price_min: yup
    .number()
    .typeError('Введіть мінімальну ціну')
    .min(0, 'Ціна не може бути негативною'),
  search_tour_date_to: yup
    .date()
    .required('Вкажіть кінцеву дату')
    .min(yup.ref('search_tour_date_from'), 'Кінцева дата повинна бути пізніше початкової'),
  nights_till: yup
    .number()
    .typeError('Вкажіть кінцеву кількість ночей')
    .min(yup.ref('nights_from'), 'Кінцева кількість ночей повинна бути не менше початкової')
    .required('Вкажіть кінцеву кількість ночей'),
  children_count: yup
    .number()
    .typeError('Введіть кількість дітей')
    .min(0, 'Мінімум 0 дітей')
    .max(3, 'Максимум 3 дітей')
    .required('Вкажіть кількість дітей'),
  price_max: yup
    .number()
    .typeError('Введіть максимальну ціну')
    .min(yup.ref('price_min'), 'Максимальна ціна повинна бути не менше мінімальної'),

  // Чекбокси
  checkbox_town_to: yup.boolean(),
  selected_towns: yup.array().of(yup.string()),
  hotel_star_all: yup.boolean(),
  selected_hotels_stars: yup.array().of(yup.string()),
  hotel_list_all: yup.boolean(),
  selected_hotels: yup.array().of(yup.string()),
  hotel_meals_all: yup.boolean(),
  selected_meals: yup.array().of(yup.string()),
});

const TourSearchForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      country_to: '',
      townfrom: '',
      search_tour_date_from: null,
      nights_from: '',
      adult_count: 2,
      currency: '',
      price_min: '',
      search_tour_date_to: null,
      nights_till: '',
      children_count: 0,
      price_max: '',
      // Чекбокси
      checkbox_town_to: true,
      selected_towns: [],
      hotel_star_all: true,
      selected_hotels_stars: [],
      hotel_list_all: true,
      selected_hotels: [],
      hotel_meals_all: true,
      selected_meals: [],
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  // Спостерігаємо за вибором "Будь-який" для Міста
  const checkboxTownTo = watch('checkbox_town_to');
  useEffect(() => {
    if (checkboxTownTo) {
      setValue('selected_towns', []);
    }
  }, [checkboxTownTo, setValue]);

  // Спостерігаємо за вибором "Будь-яка" для Зірок
  const hotelStarAll = watch('hotel_star_all');
  useEffect(() => {
    if (hotelStarAll) {
      setValue('selected_hotels_stars', []);
    }
  }, [hotelStarAll, setValue]);

  // Спостерігаємо за вибором "Будь-яка" для Списку Готелів
  const hotelListAll = watch('hotel_list_all');
  useEffect(() => {
    if (hotelListAll) {
      setValue('selected_hotels', []);
    }
  }, [hotelListAll, setValue]);

  // Спостерігаємо за вибором "Будь-яке" для Харчування
  const hotelMealsAll = watch('hotel_meals_all');
  useEffect(() => {
    if (hotelMealsAll) {
      setValue('selected_meals', []);
    }
  }, [hotelMealsAll, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tour-search-form">
      {/* Перший рядок: Країна прибуття та Місто відправлення */}
      <div className="form-row">
        {/* Країна прибуття */}
        <div className="form-group">
          <label htmlFor="country_to">Країна прибуття:</label>
          <select {...register('country_to')} id="country_to">
            <option value="">Виберіть країну</option>
            <option value="122">Албанія</option>
            <option value="3">Болгарія</option>
            <option value="50">Кіпр</option>
            <option value="19">Домінікана</option>
            <option value="9">Єгипет</option>
            <option value="4">Греція</option>
            <option value="18">Мальдіви</option>
            <option value="28">Чорногорія</option>
            <option value="5">Іспанія</option>
            <option value="17">Шрі Ланка</option>
            <option value="107">Танзанія (Занзібар)</option>
            <option value="58">Туніс</option>
            <option value="8">Туреччина</option>
            <option value="6">ОАЕ</option>
            <option value="7">Україна</option>
          </select>
          {errors.country_to && <p className="error">{errors.country_to.message}</p>}
        </div>

        {/* Місто відправлення */}
        <div className="form-group">
          <label htmlFor="townfrom">Місто відправлення:</label>
          <select {...register('townfrom')} id="townfrom">
            <option value="">Виберіть місто</option>
            <option value="Bucharest">Bucharest</option>
            <option value="Chisinau">Кишинів</option>
            <option value="Cluj-Napoca">Cluj-Napoca</option>
            <option value="Gdansk">Gdansk</option>
            <option value="Iasi">Iasi</option>
            <option value="Katowice">Katowice</option>
            <option value="Oradea">Oradea</option>
            <option value="Palanga">Palanga</option>
            <option value="Poznan">Poznan</option>
            <option value="Riga">Riga</option>
            <option value="Rzeszow">Rzeszow</option>
            <option value="Suceava">Suceava</option>
            <option value="Tallinn">Tallinn</option>
            <option value="Timisoara">Timisoara</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Warsaw">Warsaw</option>
            <option value="Wroclaw">Wroclaw</option>
          </select>
          {errors.townfrom && <p className="error">{errors.townfrom.message}</p>}
        </div>
      </div>

      {/* Другий рядок: Виліт від, Ночей від, Дорослих, Валюта, Ціна від */}
      <div className="form-row">
        {/* Виліт від */}
        <div className="form-group">
          <label htmlFor="search_tour_date_from">Виліт від:</label>
          <Controller
            control={control}
            name="search_tour_date_from"
            render={({ field }) => (
              <DatePicker
                placeholderText="Вкажіть дату"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd.MM.yyyy"
                className="date-picker"
                id="search_tour_date_from"
              />
            )}
          />
          {errors.search_tour_date_from && (
            <p className="error">{errors.search_tour_date_from.message}</p>
          )}
        </div>

        {/* Ночей від */}
        <div className="form-group">
          <label htmlFor="nights_from">Ночей від:</label>
          <select {...register('nights_from')} id="nights_from">
            <option value="">Виберіть кількість ночей</option>
            {[...Array(14)].map((_, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          {errors.nights_from && <p className="error">{errors.nights_from.message}</p>}
        </div>

        {/* Дорослих */}
        <div className="form-group">
          <label htmlFor="adult_count">Дорослих:</label>
          <select {...register('adult_count')} id="adult_count">
            {[...Array(9)].map((_, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          {errors.adult_count && <p className="error">{errors.adult_count.message}</p>}
        </div>

        {/* Валюта */}
        <div className="form-group">
          <label htmlFor="currency">Валюта:</label>
          <select {...register('currency')} id="currency">
            <option value="">Виберіть валюту</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
            {/* Додайте інші валюти за потреби */}
          </select>
          {errors.currency && <p className="error">{errors.currency.message}</p>}
        </div>

        {/* Ціна від */}
        <div className="form-group">
          <label htmlFor="price_min">Ціна від:</label>
          <input
            type="number"
            {...register('price_min')}
            id="price_min"
            placeholder="Вкажіть мінімальну ціну"
          />
          {errors.price_min && <p className="error">{errors.price_min.message}</p>}
        </div>
      </div>

      {/* Третій рядок: до (Дата), до (Ночей), Діти, до (Ціна) */}
      <div className="form-row">
        {/* До (Дата) */}
        <div className="form-group">
          <label htmlFor="search_tour_date_to">до:</label>
          <Controller
            control={control}
            name="search_tour_date_to"
            render={({ field }) => (
              <DatePicker
                placeholderText="Вкажіть дату"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd.MM.yyyy"
                className="date-picker"
                id="search_tour_date_to"
              />
            )}
          />
          {errors.search_tour_date_to && (
            <p className="error">{errors.search_tour_date_to.message}</p>
          )}
        </div>

        {/* До (Ночей) */}
        <div className="form-group">
          <label htmlFor="nights_till">до:</label>
          <select {...register('nights_till')} id="nights_till">
            <option value="">Виберіть кількість ночей</option>
            {[...Array(14)].map((_, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          {errors.nights_till && <p className="error">{errors.nights_till.message}</p>}
        </div>

        {/* Діти */}
        <div className="form-group">
          <label htmlFor="children_count">Діти:</label>
          <select {...register('children_count')} id="children_count">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.children_count && <p className="error">{errors.children_count.message}</p>}
        </div>

        <div className="form-group">
        </div>

        {/* Ціна до */}
        <div className="form-group">
          <label htmlFor="price_max">до:</label>
          <input
            type="number"
            {...register('price_max')}
            id="price_max"
            placeholder="Вкажіть максимальну ціну"
          />
          {errors.price_max && <p className="error">{errors.price_max.message}</p>}
        </div>
      </div>

      {/* Фільтри: Місто, Зірки готелю, Готелі, Харчування */}
      <div className="filter-area">
        <div className="inline_01 cf">
          {/* Місто */}
          <div className="bigform_cell_01">
            <p>Місто:</p>
            <div id="town_to" className="scrollbox">
              <p className="bold">
                <label>
                  <input
                    type="checkbox"
                    {...register('checkbox_town_to')}
                    id="checkbox_town_to"
                    className="pretty_checkable"
                    defaultChecked
                  />{' '}
                  Будь-який
                </label>
              </p>
              <p className="region">
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_towns')}
                    value="Durres"
                    className="town_to"
                    id="region2375"
                  />{' '}
                  Durres
                </label>
              </p>
              <p className="town">
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_towns')}
                    value="Ksamil"
                    className="town_to semiselected"
                    id="region2378"
                  />{' '}
                  Ksamil
                </label>
              </p>
              <p className="region">
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_towns')}
                    value="Saranda"
                    className="town_to"
                    id="region2376"
                  />{' '}
                  Saranda
                </label>
              </p>
              <p className="town">
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_towns')}
                    value="Vlora"
                    className="town_to semiselected"
                    id="region2377"
                  />{' '}
                  Vlora
                </label>
              </p>
            </div>
          </div>

          {/* Зірки готелю */}
          <div id="hotel_star" className="bigform_cell_02">
            <p></p>
            <div className="scrollbox">
              <p className="bold">
                <label>
                  <input
                    type="checkbox"
                    {...register('hotel_star_all')}
                    id="hotel_star_all"
                    className="pretty_checkable"
                    defaultChecked
                  />{' '}
                  Будь-яка
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_hotels_stars')}
                    value="3*"
                    className="hotel_stars"
                    id="star10002"
                  />{' '}
                  3*
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_hotels_stars')}
                    value="4*"
                    className="hotel_stars"
                    id="star10003"
                  />{' '}
                  4*
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_hotels_stars')}
                    value="5*"
                    className="hotel_stars"
                    id="star10004"
                  />{' '}
                  5*
                </label>
              </p>
            </div>
          </div>

          {/* Готель */}
          <div className="bigform_cell_03">
            <p>
              Готель:<span className="right">
                <input
                  {...register('hotelsearch')}
                  id="hotelsearch"
                  type="text"
                  className="hotelsearch"
                  name="hotelsearch"
                  placeholder="Знайти готель"
                  autoComplete="off"
                />
              </span>
            </p>

            <div id="hotel_list" className="scrollbox">
              <p className="bold">
                <label>
                  <input
                    type="checkbox"
                    {...register('hotel_list_all')}
                    id="hotel_list_all"
                    className="pretty_checkable"
                    defaultChecked
                  />{' '}
                  Будь-яка
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_hotels')}
                    value="A&G Hotel 4*"
                    className="hotel_list"
                    id="hotel54675"
                  />{' '}
                  A&G Hotel 4*
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_hotels')}
                    value="Adriatik Hotel BW Premier Collection 5*"
                    className="hotel_list"
                    id="hotel61114"
                  />{' '}
                  Adriatik Hotel BW Premier Collection 5*
                </label>
              </p>
            </div>
          </div>

          {/* Харчування */}
          <div className="bigform_cell_05">
            <p></p>
            <div id="hotel_meals" className="scrollbox">
              <p className="bold">
                <label>
                  <input
                    type="checkbox"
                    {...register('hotel_meals_all')}
                    id="hotel_meals_all"
                    className="pretty_checkable"
                    defaultChecked
                  />{' '}
                  Будь-яке
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_meals')}
                    value="все включено"
                    className="hotel_meals"
                    id="meal10011"
                  />{' '}
                  все включено
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_meals')}
                    value="сніданок"
                    className="hotel_meals"
                    id="meal10001"
                  />{' '}
                  сніданок
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_meals')}
                    value="сніданок, обід, вечеря"
                    className="hotel_meals"
                    id="meal10010"
                  />{' '}
                  сніданок, обід, вечеря
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_meals')}
                    value="сніданок та вечеря"
                    className="hotel_meals"
                    id="meal10002"
                  />{' '}
                  сніданок та вечеря
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    {...register('selected_meals')}
                    value="без харчування"
                    className="hotel_meals"
                    id="meal10020"
                  />{' '}
                  без харчування
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка Submit */}
      <div className="form-row">
        <button type="submit" className="submit-button">
          Пошук туру
        </button>
      </div>

      {/* Відображення помилок залидації */}
      <style jsx>{`
        .error {
          color: red;
          font-size: 0.85em;
          margin-top: 5px;
        }
      `}</style>
    </form>
  );
};

export default TourSearchForm;