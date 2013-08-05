using Insight.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Insight.Controllers
{
    public class LabQuestionController : ApiController
    {
        public IList<QuestionDTO> questionList = new List<QuestionDTO>
        {
            new QuestionDTO{QuestionType=QuestionType.InitApp,Question="Does the biological research involves any biological materials to animals?",AnswerType=AnswerType.YesNo,QuestionCode="QEST01"},
            new QuestionDTO{QuestionType=QuestionType.InitApp,Question="Does the biological research ONLY involve in vitro or in vivo use of human or nonhuman primate blood, unfixed tissues, cell lines, or other potentially infectious materials of human or nonhuman primate origin (e.g, cerebrospinal fluid , amniotic fluid, other fluids contaminated with blood)?",AnswerType=AnswerType.YesNo,QuestionCode="QEST02"},
            new QuestionDTO{QuestionType=QuestionType.LabInitApp,Question="Describe the overall objectives of the study and provide a brief overfview of the methods that will be used to achieve these objectives?",AnswerType=AnswerType.Text,QuestionCode="QEST03"}
        };

        public HttpResponseMessage GetBy(QuestionType type)
        {
            return Request.CreateResponse(HttpStatusCode.OK, questionList.Where(p=>p.QuestionType==type).AsEnumerable());
        }

        public HttpResponseMessage PostBy(IEnumerable<AnswerDTO> answers)
        {
            return Request.CreateResponse(HttpStatusCode.Created, "Values updated");
        }

    }
}
