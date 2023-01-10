namespace lab11.Models
{
    public class CalcService
    {
        public static CalcModel GetCalcModel()
        {
            var rand = new Random();
            var first = rand.Next(11);
            var second = rand.Next(11);

            return new CalcModel()
            {
                firstValue = first,
                secondValue = second,
                sum = first + second,
                dif = first - second,
                mul = first * second,
                div = second != 0 ? (first / second).ToString() : "Error"
            };
        }
    }
}