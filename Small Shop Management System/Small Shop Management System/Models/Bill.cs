using Microsoft.VisualBasic;

namespace Small_Shop_Management_System.Models
{
    public class Bill
    {
        public int Id { get; set; } 
        public string? CustomerName { get; set; }

        public long MobileNo { get; set; }

        public DateTime Date { get; set; }

        public int TotalAmount { get; set; }



    }
}
