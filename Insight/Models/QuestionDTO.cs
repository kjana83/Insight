using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insight.Models
{
    public class QuestionDTO
    {
        public QuestionType QuestionType { get; set; }

        public string Question { get; set; }

        public AnswerType AnswerType { get;set; }

        public string QuestionCode { get; set; }

    }
}