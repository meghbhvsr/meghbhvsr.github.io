import React from 'react';

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <span className="text-red-400 text-sm font-medium">Learning Experience</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          My Google{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Rejection
          </span>{' '}
          Story
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A transparent look at my Google Software Engineering interview journey - 
          from application to hiring committee rejection, and the valuable lessons learned along the way.
        </p>
      </div>

      {/* Blog Content */}
      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <p className="text-gray-300 text-lg leading-relaxed m-0">
              I recently went through the entire Software Engineering recruitment process at Google, 
              making it all the way to the hiring committee. Although I didn't pass, I learned a lot 
              and wanted to share my learnings, process, and tips. I believe we can learn more from 
              failure than we ever can from success.
            </p>
          </div>

          {/* Resume Screening */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
              Resume Screening
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I applied at the end of July 2024 and didn't hear back until September. Be patient - 
              it can take a while for recruiters to reach out, sometimes they don't reach out until 
              their window for accepting applications closes. You can always check your status on the 
              Google careers page to see if you're still in the pipeline. Make sure to cater your 
              resume towards the position you're applying for and be patient.
            </p>
          </section>

          {/* Online Assessment */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
              Google Online Assessment
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In September, after the long weekend, I finally heard back from Google. They invited me 
              to do an online coding assessment and a personality test. This assessment consisted of 
              2 LeetCode-style problems that I had an hour and a half to finish, along with a 
              personality test, which wasn't too bad.
            </p>
          </section>

          {/* Phone Screen */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
              Phone Screen
            </h2>
            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <p className="text-gray-300 leading-relaxed m-0">
                <strong className="text-green-400">Great news!</strong> I must have done really well on the online assessment, 
                as they decided to skip me past the phone screen, straight to the on-site!
              </p>
            </div>
          </section>

          {/* On-Site */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
              On-Site Preparation
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              They let me book when I wanted to do the on-site along with what programming language 
              I wanted to use, so I went with Python and decided that a month should be enough time 
              to prepare. For a month straight, I did as many LeetCode problems as I could:
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Completed the Blind 75 problems
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Used NeetCode videos for explanations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Solved Google-tagged LeetCode questions
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              I was scheduled for 4 interviews in 1 day: one Googleyness round (behavioral interview) 
              and 3 technical interviews. Each interview is 45 minutes with a 15-minute break after each, 
              plus an hour and 15-minute break after the second interview.
            </p>
          </section>

          {/* Interview Rounds */}
          <div className="grid gap-8 mb-12">
            {/* Googleyness Round */}
            <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">😊</span>
                Googleyness Round - Success
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This round went really well. It was a regular behavioral interview where they assess 
                if you'd be a culture fit at Google. Questions were based around team chemistry and 
                dealing with conflicts.
              </p>
            </div>

            {/* Technical Interview 1 */}
            <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Technical Interview 1 - Success
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This round also went really well. The question involved using a variation of binary search, 
                along with a harder follow-up that also involved binary search variation. I was able to 
                code up the first question and fully explain the follow-up.
              </p>
            </div>

            {/* Halftime */}
            <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                🔄 Halftime Break
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Coming out of the first 2 interviews, I felt really good. Took a little break, 
                ate some light food, and got ready for the next interviews.
              </p>
            </div>

            {/* Technical Interview 2 */}
            <div className="p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Technical Interview 2 - Mixed
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This round involved iterating through a trie-like structure and decoding a message. 
                I was able to get the solution, but I failed to clarify some parts like handling 
                invalid cases. I rushed the coding part and forgot to implement some parts I had 
                discussed. <strong className="text-yellow-400">Lesson learned: Never rush the coding part.</strong>
              </p>
            </div>

            {/* Technical Interview 3 */}
            <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">❌</span>
                Technical Interview 3 - Struggled
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This was my worst interview. The question involved stacking the maximum amount of boxes 
                on top of each other. I forgot to go through all the algorithms I knew and got stuck 
                on DP and brute force approaches. This took about half the interview time until the 
                interviewer gave me a hint about backtracking. I almost completed it but ran out of time.
              </p>
            </div>
          </div>

          {/* Key Learnings */}
          <section className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Key Learnings
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>Don't feel too good after 2 great interviews - you need at least another great interview to have a good chance at passing the hiring committee.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>Always go over all the various algorithms and data structures that you could apply to a question before making a calculated decision.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>Always ask about confusions, possible edge cases, and exactly what the interviewer is looking for before you start coding.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>Take your time with the coding part - read through your solution multiple times to ensure completeness.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-gray-300 leading-relaxed font-medium m-0">
                Thank you for reading, and I hope this helps in your own endeavors at Google! 
                Remember, every rejection is a stepping stone to success. 🚀
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  </div>
);

export default Blog;