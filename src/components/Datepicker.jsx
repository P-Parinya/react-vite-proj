import { useState, useMemo } from 'react';

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : '';
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    // previous month days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }
    // current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth, i), otherMonth: false });
    }
    // next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth + 1, i), otherMonth: true });
    }
    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const toggleCalendar = () => setShowCalendar((v) => !v);
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else setCurrentMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else setCurrentMonth((m) => m + 1);
  };
  const selectDate = (day) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  };
  const isSelected = (day) =>
    selectedDate && day.date.toDateString() === selectedDate.toDateString();

  return (
    <div className="relative w-full">
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder="Select date"
        className="w-full pr-8 py-2 px-4 border border-green-200 rounded-lg bg-green-50 text-green-800 placeholder:text-green-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-200 shadow"
      />
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-green-200 rounded-xl shadow-lg z-50 p-4 min-w-[16rem]">
          {/* header */}
          <div className="flex justify-between items-center mb-2">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-green-100 text-green-700 transition-colors">&lt;</button>
            <span className="font-medium text-green-800">{currentMonthName} {currentYear}</span>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-green-100 text-green-700 transition-colors">&gt;</button>
          </div>
          {/* weekdays */}
          <div className="grid grid-cols-7 text-center mb-1">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-green-600">{day}</span>
            ))}
          </div>
          {/* days */}
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day) => (
              <span
                key={day.date.toISOString()}
                onClick={() => selectDate(day)}
                className={[
                  'p-2 cursor-pointer rounded-full',
                  day.otherMonth ? 'text-green-300' : '',
                  isSelected(day) ? 'bg-green-500 text-white' : '',
                  !day.otherMonth ? 'hover:bg-green-100' : '',
                  !day.otherMonth ? 'text-green-800' : '',
                  'transition-colors',
                ].join(' ')}
              >
                {day.date.getDate()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Datepicker;
