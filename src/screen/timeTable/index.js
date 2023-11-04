import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';


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
  const itemColors = ['#63C3C6', '#EABB34', '#13A5F3', '#F96D0C', '#F96D0C'];

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

  const getWeekRange = (date) => {
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const monthName = weekStart.toLocaleString('en-us', { month: 'short' });
    return `${weekStart.getDate()} ${monthName}  -  ${weekEnd.getDate()} ${monthName} `;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>
          Timetable
        </Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateWeek(-1)}>
          <Entypo name="chevron-left" size={24} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {getWeekRange(selectedDate)}
        </Text>
        <TouchableOpacity onPress={() => navigateWeek(1)}>
          <Entypo name="chevron-right" size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.weekDisplay}>
        {
          daysInWeek.map((day, index) => {
            const date = moment(day)
            const dayOfWeek = date.format('dd');
            const isCurrentDay = date.isSame(moment(), 'day');
            return (
              <TouchableOpacity
                key={index}
                style={[styles.dayItem, day.getTime() === selectedDate.getTime() ? styles.selectedDay : null]}
                onPress={() => handleDaySelect(day)}
              >

                <Text style={[styles.dayNumber, day.getTime() === selectedDate.getTime() ? styles.selecteddayNumber : null]}>
                  {dayOfWeek}
                </Text>
                <Text style={[styles.dayNumber, day.getTime() === selectedDate.getTime() ? styles.selecteddayNumber : null]}>{day.getDate()}</Text>
                {isCurrentDay && <View style={styles.currentDayCircle} />}

              </TouchableOpacity>
            );
          })
        }
      </View>
      <View style={styles.timetable}>
        <FlatList
          data={selectedDayTimetable}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ padding: 10 }}>
              <View style={{ padding: 20, borderRadius: 10, backgroundColor: itemColors[index % itemColors.length] }}>
                <Text style={styles.timetableText}>{item}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 8,
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
    backgroundColor: '#EDF5F4',
    padding: 10,
    borderRadius: 20

  },
  selectedDay: {
    backgroundColor: '#0CF9DC',
    padding: 10,
    borderRadius: 20
  },
  dayNumber: {
    fontSize: 18,
  },
  selecteddayNumber: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  timetable: {
    padding: 20,

  },
  timetableText: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10
  },
  currentDayCircle: {
    width: 8,
    height: 8,
    backgroundColor: '#0CF9DC',
    borderRadius: 4,
    top: 4,
    left: 2,
  },
});

export default CustomCalendar;
