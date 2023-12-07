namespace _20HTTT_1.DTO.Oanh
{
    public class PolicyResultDTO
    {
        public Guid IdChinhSach { get; set; }
        public string Name { get; set; }
        public int MinimumAge { get; set; }
        public int MaximumAge { get; set; }
        public string Description { get; set; }
        public long MonthlyPay { get; set; }
    }
}
