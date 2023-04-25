namespace Project6
{
    public class toys
    {
        public int id { get; set; }
        public string? name { get; set; }

        public int price { get; set; }

        public string? image { get; set; }
        public storeavailability? StoreAvailability { get; set; }

        public string? AgeCategory { get; set; }


    }
    public class storeavailability
    {
        public bool? store1 { get; set; }
        public bool? store2 { get; set; }
    }
}
