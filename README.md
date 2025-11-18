TypeScript-এ interface এবং type দুইটাই type তৈরি করতে ব্যবহার হয়, তবে এদের মধ্যে কিছু পার্থক্য আছে, 

1. Interface
অবজেক্টের structure ঠিক করতে ব্যবহার হয় extends বা implements দিয়ে অন্য interface বা class থেকে প্রসারিত করা যায়
একই নামের interface একাধিকবার ডিক্লেয়ার করা সম্ভব TypeScript এগুলোকে একত্রিত করে

2. Type
Primitive, union, intersection বা জটিল type তৈরি করতে use হয় একবার type declare করলে একই নাম আবার ব্যবহার করা যায় না
extends নেই, তবে & ব্যবহার করে নতুন type তৈরি করা যায়

নিচে ইন্টারফেস এবং টাইপ সম্পর্কে কিছু উদাহরণ দেয়া হলো

### উদাহরণ
interface
--------------
interface User {
  name: string;
  age: number;
}

user type
----------
type Type = {
  name: string;
  age: number;
};
