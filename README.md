TypeScript-এ interface এবং type দুইটাই type তৈরি করতে ব্যবহার হয়, তবে এদের মধ্যে কিছু পার্থক্য আছে, 

Interface

অবজেক্টের structure ঠিক করতে ব্যবহার হয় extends বা implements দিয়ে অন্য interface বা class থেকে প্রসারিত করা যায়
একই নামের interface একাধিকবার ডিক্লেয়ার করা সম্ভব TypeScript এগুলোকে একত্রিত করে

Type

Primitive, union, intersection বা জটিল type তৈরি করতে use হয় একবার type declare করলে একই নাম আবার ব্যবহার করা যায় না
extends নেই, তবে & ব্যবহার করে নতুন type তৈরি করা যায়

নিচে ইন্টারফেস এবং টাইপ সম্পর্কে কিছু উদাহরণ দেয়া হলো

উদাহরণ
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


TypeScript-এ keyof কীভাবে ব্যবহার হয়?

TypeScript শিখতে গেলে আপনি হয়তো keyof শব্দটি দেখেছেন। এটি আসলে কী করে? চলুন সহজ ভাষায় দেখি,
keyof ব্যবহার করলে আমরা একটি অবজেক্টের সব প্রপার্টির নামকে টাইপ হিসেবে নিতে পারি। এতে টাইপ চেক আরও শক্তিশালী হয় এবং ভুল কম হয়

উদাহরণ
-------
interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonKeys = keyof Person;

let key1: PersonKeys = "name";
let key2: PersonKeys = "age";
let key3: PersonKeys = "gender"; 