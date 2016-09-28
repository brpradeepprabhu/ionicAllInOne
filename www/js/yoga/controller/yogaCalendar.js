(function () {
    function yogaCalendar($scope, yogaConfig) {
      
        $scope.eventClick = function () {};
        $scope.events = yogaConfig.completedYoga;
        $scope.calendarOptions = {
            defaultDate: new Date(),
            minDate: new Date([2010, 12, 31]),
            maxDate: new Date([2020, 12, 31]),
            dayNamesLength: 1, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
            multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
            maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
            eventClick: $scope.eventClick,
            dateClick: $scope.dateClick
        };

    }
    angular.module('yoga').controller("yogaCalendar", yogaCalendar);
    yogaCalendar.$inject = ['$scope', 'yogaConfig'];
}());