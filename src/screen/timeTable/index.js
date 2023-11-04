import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';


const schoolTimetable = {
  Monday: [
    'Math class at 9:00 AM',
    'Science class at 11:00 AM',
  ],
  Tuesday: [
    'History class at 10:00 AM',
    'English class at 1:00 PM',
  ],
  Wednesday: [
    'Gym class at 8:00 AM',
    'Art class at 2:00 PM',
  ],
  Thursday: [
    'Music class at 9:30 AM',
    'Physics class at 3:00 PM',
  ],
  Friday: [
    'Chemistry class at 11:30 AM',
    'Spanish class at 4:00 PM',
  ],
  Saturday: ['No classes today'],
  Sunday: ['No classes today'],
};

const CustomCalendar = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [daysInWeek, setDaysInWeek] = useState([]);
  const [selectedDayTimetable, setSelectedDayTimetable] = useState([]);

  const navigateWeek = (step) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + step * 7);
    setSelectedDate(newDate);
  };

  useEffect(() => {

    generateDaysInWeek(selectedDate);
    const date = moment(selectedDate)
    const dayOfWeek = date.format('dddd');
    setSelectedDayTimetable(schoolTimetable[dayOfWeek]);

  }, [selectedDate]);

  const generateDaysInWeek = (selectedDate) => {
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - selectedDate.getDay());
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      days.push(day);
    }
    setDaysInWeek(days);
  };

  const handleDaySelect = (day) => {

    const date = moment(day)
    const dayOfWeek = date.format('dddd');

    setSelectedDate(day);
    setSelectedDayTimetable(schoolTimetable[dayOfWeek]);

    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateWeek(-1)}>
          <Text>{'<'} Prev Week</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {selectedDate.toLocaleString('en-us', { month: 'short' })} {selectedDate.getDate()} 
        </Text>
        <TouchableOpacity onPress={() => navigateWeek(1)}>
          <Text>Next Week {'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.weekDisplay}>
        {daysInWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dayItem, day.getTime() === selectedDate.getTime() ? styles.selectedDay : null]}
            onPress={() => handleDaySelect(day)}
          >
            <Text style={styles.dayNumber}>{day.getDate()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.timetable}>
        <FlatList
          data={selectedDayTimetable}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.timetableText}>{item}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dayItem: {
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: 'blue',
  },
  dayNumber: {
    fontSize: 24,
  },
  timetable: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  timetableText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomCalendar;
