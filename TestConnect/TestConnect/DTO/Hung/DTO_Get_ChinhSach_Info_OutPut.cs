namespace _20HTTT_1.DTO.Hung
{
    public class DTO_Get_ChinhSach_Info_OutPut
    {
        public Guid IdChinhSach { get; set; }
        public string Name { get; set; }
        public int MinimumAge { get; set; }
        public int MaximumAge { get; set; }
        public string Description { get; set; }
        public long MonthlyPay { get; set; }
        public string Status { get; set; }

}
}