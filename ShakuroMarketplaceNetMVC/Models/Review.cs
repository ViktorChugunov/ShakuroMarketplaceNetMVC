﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShakuroMarketplaceNetMVC.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Reviewer { get; set; }
        public string ReviewerAvatarSrc { get; set; }
        public DateTime Date { get; set; }
        public string Advantages { get; set; }
        public string Disadvantages { get; set; }
        public string Comment { get; set; }
        public int Mark { get; set; }
        public int LikesNumber { get; set; }
        public int DislikesNumber { get; set; }
        public string ExperienceOfUse { get; set; }
        
        public virtual ICollection<Good> Goods { get; set; }
    }
}