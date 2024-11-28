export function getWeekDays(startDate: Date): Array<{ short: string; date: string; full: Date }> {
    const days = []
    const currentDate = new Date(startDate)
    // Adjust to start from Sunday
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
    
    for (let i = 0; i < 7; i++) {
      days.push({
        short: currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
        date: currentDate.toLocaleDateString('en-US', { day: '2-digit' }),
        full: new Date(currentDate)
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }
  
  export function getStartOfWeek(date: Date): Date {
    const result = new Date(date)
    result.setDate(result.getDate() - result.getDay()) // Start from Sunday
    return result
  }
  
  export function isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }
  
  export function formatMonthYear(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }
  