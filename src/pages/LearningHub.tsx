// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   GraduationCap,
//   Search,
//   BookOpen,
//   Clock,
//   Star,
//   Trophy,
//   Sparkles,
//   CheckCircle,
//   Lock,
//   Users,
//   Award,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Progress } from '@/components/ui/progress';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';

// // Course Card Component
// function CourseCard({
//   title,
//   instructor,
//   category,
//   duration,
//   lessons,
//   reward,
//   progress,
//   rating,
//   students,
//   isLocked,
//   isPremium,
// }: {
//   title: string;
//   instructor: string;
//   category: string;
//   duration: string;
//   lessons: number;
//   reward: number;
//   progress?: number;
//   rating: number;
//   students: string;
//   isLocked?: boolean;
//   isPremium?: boolean;
// }) {
//   return (
//     <motion.div
//       whileHover={!isLocked ? { scale: 1.02, y: -5 } : {}}
//       className={`glass-card overflow-hidden group ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
//     >
//       {/* Course Thumbnail */}
//       <div className="aspect-video relative overflow-hidden bg-white/5">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:opacity-30 transition-opacity" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <BookOpen size={48} className="text-white/30 group-hover:text-white/50 transition-colors" />
//         </div>

//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex gap-2">
//           {isPremium && (
//             <span className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium">
//               PREMIUM
//             </span>
//           )}
//           <span className="px-2 py-1 rounded-full bg-white/20 text-white text-xs">
//             {category}
//           </span>
//         </div>

//         {isLocked && (
//           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//             <Lock size={32} className="text-white/60" />
//           </div>
//         )}

//         {/* Play Button */}
//         {!isLocked && progress !== undefined && progress < 100 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             className="absolute inset-0 bg-black/40 flex items-center justify-center"
//           >
//             <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//               <Sparkles size={28} className="text-white" />
//             </div>
//           </motion.div>
//         )}

//         {progress === 100 && (
//           <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
//             <CheckCircle size={48} className="text-green-400" />
//           </div>
//         )}
//       </div>

//       {/* Course Info */}
//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <div>
//             <h3 className="font-bold group-hover:text-blue-400 transition-colors line-clamp-1">{title}</h3>
//             <p className="text-white/50 text-sm">{instructor}</p>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
//           <span className="flex items-center gap-1">
//             <Clock size={14} />
//             {duration}
//           </span>
//           <span className="flex items-center gap-1">
//             <BookOpen size={14} />
//             {lessons} lessons
//           </span>
//           <span className="flex items-center gap-1">
//             <Users size={14} />
//             {students}
//           </span>
//         </div>

//         {/* Progress or Rating */}
//         {progress !== undefined ? (
//           <div className="mb-3">
//             <div className="flex items-center justify-between text-sm mb-1">
//               <span className="text-white/60">Progress</span>
//               <span className="font-medium">{progress}%</span>
//             </div>
//             <Progress value={progress} className="h-2" />
//           </div>
//         ) : (
//           <div className="flex items-center gap-1 mb-3">
//             <Star size={14} className="text-yellow-400 fill-yellow-400" />
//             <span className="text-sm font-medium">{rating}</span>
//           </div>
//         )}

//         {/* Reward */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-1 text-amber-400">
//             <Sparkles size={14} />
//             <span className="font-medium">+{reward} on complete</span>
//           </div>
//           {progress === 100 && (
//             <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
//               Completed
//             </Badge>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // Stats Card
// function StatCard({
//   icon: Icon,
//   label,
//   value,
//   change,
//   color,
// }: {
//   icon: React.ElementType;
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="glass-card p-4"
//     >
//       <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
//         <Icon size={20} className="text-white" />
//       </div>
//       <p className="text-white/50 text-sm">{label}</p>
//       <div className="flex items-end justify-between">
//         <span className="text-2xl font-bold">{value}</span>
//         <span className="text-green-400 text-sm">{change}</span>
//       </div>
//     </motion.div>
//   );
// }

// // Teacher Dashboard Component
// function TeacherDashboard() {
//   const stats = [
//     { icon: Users, label: 'Total Students', value: '1,234', change: '+12%', color: 'from-blue-500 to-cyan-500' },
//     { icon: BookOpen, label: 'Active Courses', value: '8', change: '+2', color: 'from-purple-500 to-violet-500' },
//     { icon: Star, label: 'Avg Rating', value: '4.8', change: '+0.2', color: 'from-amber-400 to-orange-500' },
//     { icon: Sparkles, label: 'Total Earnings', value: '45,600', change: '+15%', color: 'from-emerald-500 to-green-500' },
//   ];

//   const myCourses = [
//     { title: 'React Mastery', students: 456, revenue: 12500, rating: 4.9, status: 'active' },
//     { title: 'Python Basics', students: 892, revenue: 8900, rating: 4.7, status: 'active' },
//     { title: 'UI/UX Design', students: 234, revenue: 5600, rating: 4.8, status: 'pending' },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {stats.map((stat, i) => (
//           <StatCard key={i} {...stat} />
//         ))}
//       </div>

//       {/* My Courses */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="glass-card p-6"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-bold text-lg">My Courses</h3>
//           <Button className="btn-primary">
//             <Sparkles size={16} className="mr-2" />
//             Create Course
//           </Button>
//         </div>

//         <div className="space-y-4">
//           {myCourses.map((course, i) => (
//             <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
//               <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
//                 <BookOpen size={24} className="text-white/40" />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center gap-2">
//                   <h4 className="font-medium">{course.title}</h4>
//                   {course.status === 'pending' && (
//                     <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
//                       Pending Approval
//                     </Badge>
//                   )}
//                 </div>
//                 <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
//                   <span className="flex items-center gap-1">
//                     <Users size={14} />
//                     {course.students} students
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Star size={14} className="text-yellow-400" />
//                     {course.rating}
//                   </span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="font-bold text-emerald-400">{course.revenue.toLocaleString()}</div>
//                 <div className="text-xs text-white/50">coins earned</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Pending Certificates */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="glass-card p-6"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-bold text-lg">Pending Certificates</h3>
//           <Badge className="bg-blue-500/20 text-blue-400">3 pending</Badge>
//         </div>

//         <div className="space-y-3">
//           {[
//             { student: 'Alex Johnson', course: 'React Mastery', completed: '2 days ago' },
//             { student: 'Sarah Lee', course: 'Python Basics', completed: '3 days ago' },
//             { student: 'Mike Chen', course: 'React Mastery', completed: '5 days ago' },
//           ].map((item, i) => (
//             <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
//                   {item.student.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-medium">{item.student}</p>
//                   <p className="text-sm text-white/50">{item.course}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-white/40">{item.completed}</span>
//                 <Button size="sm" className="btn-primary">
//                   <Award size={14} className="mr-1" />
//                   Certify
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function LearningHub() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isTeacherView, setIsTeacherView] = useState(false);

//   const categories = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Language'];

//   const courses = [
//     {
//       title: 'Complete React Development',
//       instructor: 'John Smith',
//       category: 'Development',
//       duration: '24h',
//       lessons: 48,
//       reward: 500,
//       progress: 65,
//       rating: 4.9,
//       students: '12.5K',
//     },
//     {
//       title: 'UI/UX Design Fundamentals',
//       instructor: 'Emma Davis',
//       category: 'Design',
//       duration: '16h',
//       lessons: 32,
//       reward: 350,
//       progress: 30,
//       rating: 4.8,
//       students: '8.2K',
//     },
//     {
//       title: 'Python for Beginners',
//       instructor: 'Mike Johnson',
//       category: 'Development',
//       duration: '20h',
//       lessons: 40,
//       reward: 400,
//       rating: 4.7,
//       students: '15.1K',
//     },
//     {
//       title: 'Digital Marketing Mastery',
//       instructor: 'Lisa Wang',
//       category: 'Marketing',
//       duration: '12h',
//       lessons: 24,
//       reward: 250,
//       rating: 4.6,
//       students: '6.8K',
//     },
//     {
//       title: 'Advanced JavaScript',
//       instructor: 'David Brown',
//       category: 'Development',
//       duration: '18h',
//       lessons: 36,
//       reward: 450,
//       isPremium: true,
//       rating: 4.9,
//       students: '9.3K',
//     },
//     {
//       title: 'Business Communication',
//       instructor: 'Anna Wilson',
//       category: 'Business',
//       duration: '8h',
//       lessons: 16,
//       reward: 200,
//       rating: 4.5,
//       students: '4.5K',
//     },
//   ];

//   const myLearning = [
//     {
//       title: 'Complete React Development',
//       instructor: 'John Smith',
//       category: 'Development',
//       duration: '24h',
//       lessons: 48,
//       reward: 500,
//       progress: 65,
//       rating: 4.9,
//       students: '12.5K',
//     },
//     {
//       title: 'UI/UX Design Fundamentals',
//       instructor: 'Emma Davis',
//       category: 'Design',
//       duration: '16h',
//       lessons: 32,
//       reward: 350,
//       progress: 30,
//       rating: 4.8,
//       students: '8.2K',
//     },
//   ];

//   return (
//     <div className="space-y-6 pb-20">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//       >
//         <div>
//           <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
//             <GraduationCap className="text-blue-400" />
//             Learning Hub
//           </h1>
//           <p className="text-white/60">Learn new skills, earn certificates, get rewarded</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <Button
//             variant={isTeacherView ? 'default' : 'outline'}
//             onClick={() => setIsTeacherView(!isTeacherView)}
//             className={isTeacherView ? 'btn-primary' : 'btn-secondary'}
//           >
//             <Sparkles size={16} className="mr-2" />
//             {isTeacherView ? 'Student View' : 'Teacher Portal'}
//           </Button>
//         </div>
//       </motion.div>

//       {isTeacherView ? (
//         <TeacherDashboard />
//       ) : (
//         <>
//           {/* Stats Banner */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4"
//           >
//             <div className="glass-card p-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
//                   <BookOpen size={20} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white/50 text-sm">Courses</p>
//                   <p className="text-xl font-bold">12</p>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-card p-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
//                   <Clock size={20} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white/50 text-sm">Hours</p>
//                   <p className="text-xl font-bold">48h</p>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-card p-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
//                   <Sparkles size={20} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white/50 text-sm">Earned</p>
//                   <p className="text-xl font-bold">2,450</p>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-card p-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
//                   <Trophy size={20} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-white/50 text-sm">Certificates</p>
//                   <p className="text-xl font-bold">5</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Search and Filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
//               <Input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-12 bg-white/5 border-white/10"
//               />
//             </div>
//             <Button variant="outline" className="btn-secondary">
//               <Sparkles size={18} className="mr-2" />
//               Filter
//             </Button>
//           </motion.div>

//           {/* Main Content */}
//           <Tabs defaultValue="browse" className="w-full">
//             <TabsList className="glass mb-6">
//               <TabsTrigger value="browse">Browse Courses</TabsTrigger>
//               <TabsTrigger value="my-learning">My Learning</TabsTrigger>
//               <TabsTrigger value="certificates">Certificates</TabsTrigger>
//             </TabsList>

//             <TabsContent value="browse" className="mt-0">
//               {/* Categories */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {categories.map((cat, i) => (
//                   <button
//                     key={i}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                       i === 0
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>

//               {/* Courses Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {courses.map((course, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <CourseCard {...course} />
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="my-learning" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {myLearning.map((course, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <CourseCard {...course} />
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="certificates" className="mt-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[
//                   { title: 'React Development', date: 'Jan 15, 2026', instructor: 'John Smith' },
//                   { title: 'Python Basics', date: 'Dec 20, 2025', instructor: 'Mike Johnson' },
//                   { title: 'UI Design Fundamentals', date: 'Nov 10, 2025', instructor: 'Emma Davis' },
//                 ].map((cert, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="glass-card p-6 text-center"
//                   >
//                     <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
//                       <Award size={36} className="text-white" />
//                     </div>
//                     <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
//                     <p className="text-white/50 text-sm mb-1">{cert.instructor}</p>
//                     <p className="text-white/40 text-xs">Earned on {cert.date}</p>
//                     <Button variant="outline" className="mt-4 w-full btn-secondary">
//                       View Certificate
//                     </Button>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </>
//       )}
//     </div>
//   );
// }





//================================================================================================================================================================================




import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Search,
  BookOpen,
  Clock,
  Star,
  Trophy,
  Sparkles,
  CheckCircle,
  Lock,
  Users,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Background images for learning hub
const BG_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
  development: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
  design: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  business: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  marketing: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
  language: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
  certificate: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=400&h=300&fit=crop',
  teacher: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
};

// Course Card Component with Background
function CourseCard({
  title,
  instructor,
  category,
  duration,
  lessons,
  reward,
  progress,
  rating,
  students,
  isLocked,
  isPremium,
  bgImage,
}: {
  title: string;
  instructor: string;
  category: string;
  duration: string;
  lessons: number;
  reward: number;
  progress?: number;
  rating: number;
  students: string;
  isLocked?: boolean;
  isPremium?: boolean;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.02, y: -5 } : {}}
      className={`glass-card overflow-hidden group relative ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Course Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:opacity-30 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen size={48} className="text-white/30 group-hover:text-white/50 transition-colors" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isPremium && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium backdrop-blur-sm">
              PREMIUM
            </span>
          )}
          <span className="px-2 py-1 rounded-full bg-white/20 text-white text-xs backdrop-blur-sm">
            {category}
          </span>
        </div>

        {isLocked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Lock size={32} className="text-white/60" />
          </div>
        )}

        {/* Play Button */}
        {!isLocked && progress !== undefined && progress < 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles size={28} className="text-white" />
            </div>
          </motion.div>
        )}

        {progress === 100 && (
          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
            <CheckCircle size={48} className="text-green-400" />
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-4 relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold group-hover:text-blue-400 transition-colors line-clamp-1">{title}</h3>
            <p className="text-white/50 text-sm">{instructor}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={14} />
            {lessons} lessons
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {students}
          </span>
        </div>

        {/* Progress or Rating */}
        {progress !== undefined ? (
          <div className="mb-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-white/60">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        ) : (
          <div className="flex items-center gap-1 mb-3">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        )}

        {/* Reward */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            <Sparkles size={14} />
            <span className="font-medium">+{reward} on complete</span>
          </div>
          {progress === 100 && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Completed
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Stats Card with Background
function StatCard({
  icon: Icon,
  label,
  value,
  change,
  color,
  bgImage,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  color: string;
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`} />
      <div className="relative z-10">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg`}>
          <Icon size={20} className="text-white" />
        </div>
        <p className="text-white/50 text-sm">{label}</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-green-400 text-sm">{change}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Teacher Dashboard Component
function TeacherDashboard() {
  const stats = [
    { icon: Users, label: 'Total Students', value: '1,234', change: '+12%', color: 'from-blue-500 to-cyan-500', bgImage: BG_IMAGES.teacher },
    { icon: BookOpen, label: 'Active Courses', value: '8', change: '+2', color: 'from-purple-500 to-violet-500', bgImage: BG_IMAGES.development },
    { icon: Star, label: 'Avg Rating', value: '4.8', change: '+0.2', color: 'from-amber-400 to-orange-500', bgImage: BG_IMAGES.certificate },
    { icon: Sparkles, label: 'Total Earnings', value: '45,600', change: '+15%', color: 'from-emerald-500 to-green-500', bgImage: BG_IMAGES.business },
  ];

  const myCourses = [
    { title: 'React Mastery', students: 456, revenue: 12500, rating: 4.9, status: 'active' },
    { title: 'Python Basics', students: 892, revenue: 8900, rating: 4.7, status: 'active' },
    { title: 'UI/UX Design', students: 234, revenue: 5600, rating: 4.8, status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* My Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.teacher})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">My Courses</h3>
            <Button className="btn-primary">
              <Sparkles size={16} className="mr-2" />
              Create Course
            </Button>
          </div>

          <div className="space-y-4">
            {myCourses.map((course, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <BookOpen size={24} className="text-white/40" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{course.title}</h4>
                    {course.status === 'pending' && (
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        Pending Approval
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {course.students} students
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      {course.rating}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-400">{course.revenue.toLocaleString()}</div>
                  <div className="text-xs text-white/50">coins earned</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pending Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Pending Certificates</h3>
          <Badge className="bg-blue-500/20 text-blue-400">3 pending</Badge>
        </div>

        <div className="space-y-3">
          {[
            { student: 'Alex Johnson', course: 'React Mastery', completed: '2 days ago' },
            { student: 'Sarah Lee', course: 'Python Basics', completed: '3 days ago' },
            { student: 'Mike Chen', course: 'React Mastery', completed: '5 days ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                  {item.student.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{item.student}</p>
                  <p className="text-sm text-white/50">{item.course}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/40">{item.completed}</span>
                <Button size="sm" className="btn-primary">
                  <Award size={14} className="mr-1" />
                  Certify
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function LearningHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTeacherView, setIsTeacherView] = useState(false);

  const categories = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Language'];

  const courses = [
    {
      title: 'Complete React Development',
      instructor: 'John Smith',
      category: 'Development',
      duration: '24h',
      lessons: 48,
      reward: 500,
      progress: 65,
      rating: 4.9,
      students: '12.5K',
      bgImage: BG_IMAGES.development,
    },
    {
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Davis',
      category: 'Design',
      duration: '16h',
      lessons: 32,
      reward: 350,
      progress: 30,
      rating: 4.8,
      students: '8.2K',
      bgImage: BG_IMAGES.design,
    },
    {
      title: 'Python for Beginners',
      instructor: 'Mike Johnson',
      category: 'Development',
      duration: '20h',
      lessons: 40,
      reward: 400,
      rating: 4.7,
      students: '15.1K',
      bgImage: BG_IMAGES.development,
    },
    {
      title: 'Digital Marketing Mastery',
      instructor: 'Lisa Wang',
      category: 'Marketing',
      duration: '12h',
      lessons: 24,
      reward: 250,
      rating: 4.6,
      students: '6.8K',
      bgImage: BG_IMAGES.marketing,
    },
    {
      title: 'Advanced JavaScript',
      instructor: 'David Brown',
      category: 'Development',
      duration: '18h',
      lessons: 36,
      reward: 450,
      isPremium: true,
      rating: 4.9,
      students: '9.3K',
      bgImage: BG_IMAGES.development,
    },
    {
      title: 'Business Communication',
      instructor: 'Anna Wilson',
      category: 'Business',
      duration: '8h',
      lessons: 16,
      reward: 200,
      rating: 4.5,
      students: '4.5K',
      bgImage: BG_IMAGES.business,
    },
  ];

  const myLearning = [
    {
      title: 'Complete React Development',
      instructor: 'John Smith',
      category: 'Development',
      duration: '24h',
      lessons: 48,
      reward: 500,
      progress: 65,
      rating: 4.9,
      students: '12.5K',
      bgImage: BG_IMAGES.development,
    },
    {
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Davis',
      category: 'Design',
      duration: '16h',
      lessons: 32,
      reward: 350,
      progress: 30,
      rating: 4.8,
      students: '8.2K',
      bgImage: BG_IMAGES.design,
    },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
            <GraduationCap className="text-blue-400" />
            Learning Hub
          </h1>
          <p className="text-white/60">Learn new skills, earn certificates, get rewarded</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant={isTeacherView ? 'default' : 'outline'}
            onClick={() => setIsTeacherView(!isTeacherView)}
            className={isTeacherView ? 'btn-primary' : 'btn-secondary'}
          >
            <Sparkles size={16} className="mr-2" />
            {isTeacherView ? 'Student View' : 'Teacher Portal'}
          </Button>
        </div>
      </motion.div>

      {isTeacherView ? (
        <TeacherDashboard />
      ) : (
        <>
          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="glass-card p-4 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.development})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Courses</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.design})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Hours</p>
                  <p className="text-xl font-bold">48h</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.certificate})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Earned</p>
                  <p className="text-xl font-bold">2,450</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.certificate})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Certificates</p>
                  <p className="text-xl font-bold">5</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10"
              />
            </div>
            <Button variant="outline" className="btn-secondary">
              <Sparkles size={18} className="mr-2" />
              Filter
            </Button>
          </motion.div>

          {/* Main Content */}
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="glass mb-6 backdrop-blur-xl">
              <TabsTrigger value="browse">Browse Courses</TabsTrigger>
              <TabsTrigger value="my-learning">My Learning</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="mt-0">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      i === 0
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-learning" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {myLearning.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'React Development', date: 'Jan 15, 2026', instructor: 'John Smith' },
                  { title: 'Python Basics', date: 'Dec 20, 2025', instructor: 'Mike Johnson' },
                  { title: 'UI Design Fundamentals', date: 'Nov 10, 2025', instructor: 'Emma Davis' },
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 text-center relative overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(10, 14, 23, 0.95) 0%, rgba(10, 14, 23, 0.9) 100%), url(${BG_IMAGES.certificate})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                        <Award size={36} className="text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                      <p className="text-white/50 text-sm mb-1">{cert.instructor}</p>
                      <p className="text-white/40 text-xs">Earned on {cert.date}</p>
                      <Button variant="outline" className="mt-4 w-full btn-secondary">
                        View Certificate
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}