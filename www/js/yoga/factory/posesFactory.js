/**
 * Created by pradeep on 14-08-2016.
 */
(function () {

  var posesFactory = function () {
    var poses = [
      {"text": "BharadvajasTwist","sanskrit":"Bharadvajasana I"},
      {"text": "Big Toe Pose","sanskrit":"Padangusthasana"},
     {"text": "Bridge Pose","sanskrit":"Setu Bandha Sarvangasana"},
      {"text": "Cat Pose","sanskrit":"Marjaryasana"},
      {"text": "Chair Pose","sanskrit":"Utkatasana"},
      {"text": "Cow Pose","sanskrit":"Bitilasana"},
      {"text": "Crane (Crow) Pose","sanskrit":"Bakasana"},
      {"text": "Downward-Facing Dog","sanskrit":"Adho Mukha Svanasana"},
      {"text": "Easy Pose","sanskrit":"Sukhasana"},
      {"text": "Extended Hand-To-Big-Toe Pose","sanskrit":"Utthita Hasta Padangustasana"},
      {"text": "Extended Puppy Pose","sanskrit":"Uttana Shishosana"},
      {"text": "Extended Triangle Pose","sanskrit":"Utthita Trikonasana"},
      {"text": "Firefly Pose","sanskrit":"Tittibhasana"},
      {"text": "Garland Pose","sanskrit":"Malasana"},
      {"text": "Half Frog Pose","sanskrit":"Ardha Bhekasana"},
      {"text": "Half Lord of the Fishes Pose","sanskrit":"Ardha Matsyendrasana"},
      {"text": "Locust Pose","sanskrit":"Salabhasana"},
      {"text": "Marichi’s Pose","sanskrit":"Marichyasana III"},
      {"text": "Mountain Pose","sanskrit":"Tadasana"},
      {"text": "Pigeon Pose","sanskrit":"Kapotasana"},
      {"text": "Side Crane (Crow) Pose","sanskrit":"Parsva Bakasana"},
      {"text": "Staff Pose","sanskrit":"Dandasana"},
      {"text": "Standing Half Forward Bend","sanskrit":"Ardha Uttanasana"},
      {"text": "Supported Headstand","sanskrit":"Salamba Sirsasana"},
      {"text": "Supported Shoulderstand","sanskrit":"Salamba Sarvangasana"},
      {"text": "Tree Pose","sanskrit":"Vrksasana"},
      {"text": "Upward Bow (Wheel) Pose","sanskrit":"Urdhva Dhanurasana"},
      {"text": "Upward Facing Two-Foot Staff Pose","sanskrit":"Dwi Pada Viparita Dandasana"},
      {"text": "Upward Plank Pose","sanskrit":"Purvottanasana"},
      {"text": "Upward-Facing Dog Pose","sanskrit":"Urdhva Mukha Svanasana"},
      {"text": "Warrior II Pose","sanskrit":"Virabhadrasana II"}
    ];
    return {
      poses: poses
    };
  };
  angular.module('yoga').factory("posesFactory", posesFactory);

}());
