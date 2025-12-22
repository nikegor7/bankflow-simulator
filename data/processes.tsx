export type ProcessStatus = 'Pending' | 'InProgress' | 'Completed';

export const processes = [
  {
    id: 1,
    name: 'Обмен валют',
    steps: ['Проверка документов', 'Обмен валют', 'Выдача квитанций'],
    status: 'Pending' as ProcessStatus,
  },
  {
    id: 2,
    name: 'Открытие счёта',
    steps: ['Проверка документов', 'Заполнение анкеты', 'Активация счёта'],
    status: 'Pending' as ProcessStatus,
  },
  {
    id: 3,
    name: 'Пополнение счёта',
    steps: ['Выбор метода', 'Ввод суммы', 'Подтверждение'],
    status: 'InProgress' as ProcessStatus,
  },
  {
    id: 4,
    name: 'Выдача кредита',
    steps: ['Проверка истории', 'Рассмотрение', 'Выдача'],
    status: 'Completed' as ProcessStatus,
  },
];
