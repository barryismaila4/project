package com.LoginRegister.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.LoginRegister.example.entity.Course;
import com.LoginRegister.example.entity.DanceCategory;
import com.LoginRegister.example.entity.DanceSchool;
import com.LoginRegister.example.entity.DanceStyle;
import com.LoginRegister.example.service.DanceService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DanceController {

    @Autowired
    private DanceService danceService;

    // *** DanceCategory Endpoints ***

    @PostMapping("/categories")
    public ResponseEntity<DanceCategory> addDanceCategory(@RequestBody DanceCategory danceCategory) {
        DanceCategory savedDanceCategory = danceService.addDanceCategory(danceCategory);
        return new ResponseEntity<>(savedDanceCategory, HttpStatus.CREATED);
    }

    @GetMapping("/categories")
    public ResponseEntity<List<DanceCategory>> getAllDanceCategories() {
        List<DanceCategory> categories = danceService.getAllDanceCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<DanceCategory> getDanceCategoryById(@PathVariable Long id) {
        Optional<DanceCategory> category = danceService.getDanceCategoryById(id);
        return category.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<DanceCategory> updateDanceCategory(@PathVariable Long id, @RequestBody DanceCategory danceCategory) {
        DanceCategory updatedCategory = danceService.updateDanceCategory(id, danceCategory);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> deleteDanceCategory(@PathVariable Long id) {
        danceService.deleteDanceCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // *** DanceStyle Endpoints ***

    @PostMapping("/categories/{categoryId}/styles")
    public ResponseEntity<DanceStyle> addDanceStyle(@PathVariable Long categoryId, @RequestBody DanceStyle danceStyle) {
        DanceStyle savedDanceStyle = danceService.addDanceStyle(categoryId, danceStyle);
        return new ResponseEntity<>(savedDanceStyle, HttpStatus.CREATED);
    }

    @GetMapping("/styles")
    public ResponseEntity<List<DanceStyle>> getAllDanceStyles() {
        List<DanceStyle> styles = danceService.getAllDanceStyles();
        return new ResponseEntity<>(styles, HttpStatus.OK);
    }

    @GetMapping("/styles/{id}")
    public ResponseEntity<DanceStyle> getDanceStyleById(@PathVariable Long id) {
        Optional<DanceStyle> style = danceService.getDanceStyleById(id);
        return style.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/styles/{id}")
    public ResponseEntity<DanceStyle> updateDanceStyle(@PathVariable Long id, @RequestBody DanceStyle danceStyle, @RequestParam Long categoryId) {
        DanceStyle updatedStyle = danceService.updateDanceStyle(id, categoryId, danceStyle);
        return new ResponseEntity<>(updatedStyle, HttpStatus.OK);
    }

    @DeleteMapping("/styles/{id}")
    public ResponseEntity<Void> deleteDanceStyle(@PathVariable Long id) {
        danceService.deleteDanceStyle(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // *** DanceSchool Endpoints ***

    @PostMapping("/styles/{styleId}/schools")
    public ResponseEntity<DanceSchool> addDanceSchool(@PathVariable Long styleId, @RequestBody DanceSchool danceSchool) {
        DanceSchool savedDanceSchool = danceService.addDanceSchool(styleId, danceSchool);
        return new ResponseEntity<>(savedDanceSchool, HttpStatus.CREATED);
    }

    @GetMapping("/schools")
    public ResponseEntity<List<DanceSchool>> getAllDanceSchools() {
        List<DanceSchool> schools = danceService.getAllDanceSchools();
        return new ResponseEntity<>(schools, HttpStatus.OK);
    }

    @GetMapping("/schools/{id}")
    public ResponseEntity<DanceSchool> getDanceSchoolById(@PathVariable Long id) {
        Optional<DanceSchool> school = danceService.getDanceSchoolById(id);
        return school.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/schools/{id}")
    public ResponseEntity<DanceSchool> updateDanceSchool(@PathVariable Long id, @RequestBody DanceSchool danceSchool, @RequestParam Long styleId) {
        DanceSchool updatedSchool = danceService.updateDanceSchool(id, styleId, danceSchool);
        return new ResponseEntity<>(updatedSchool, HttpStatus.OK);
    }

    @DeleteMapping("/schools/{id}")
    public ResponseEntity<Void> deleteDanceSchool(@PathVariable Long id) {
        danceService.deleteDanceSchool(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // *** Course Endpoints ***

    @PostMapping("/schools/{schoolId}/courses")
    public ResponseEntity<Course> addCourse(@PathVariable Long schoolId, @RequestBody Course course) {
        Course savedCourse = danceService.addCourse(schoolId, course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = danceService.getAllCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Optional<Course> course = danceService.getCourseById(id);
        return course.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course, @RequestParam Long schoolId) {
        Course updatedCourse = danceService.updateCourse(id, schoolId, course);
        return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        danceService.deleteCourse(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    // Ajoutez cette méthode dans votre DanceController

@GetMapping("/categories/{categoryId}/styles")
public ResponseEntity<List<DanceStyle>> getDanceStylesByCategoryId(@PathVariable Long categoryId) {
    List<DanceStyle> styles = danceService.getDanceStylesByCategoryId(categoryId);
    return new ResponseEntity<>(styles, HttpStatus.OK);
}
@GetMapping("/styles/{styleId}/schools")
    public ResponseEntity<List<DanceSchool>> getDanceSchoolsByStyleId(@PathVariable Long styleId) {
        List<DanceSchool> schools = danceService.getDanceSchoolsByStyleId(styleId);
        return new ResponseEntity<>(schools, HttpStatus.OK);
    }
// Endpoint pour obtenir les cours par ID d'école de danse
@GetMapping("/schools/{danceSchoolId}/courses")
public ResponseEntity<List<Course>> getCoursesByDanceSchoolId(@PathVariable Long danceSchoolId) {
    List<Course> courses = danceService.getCoursesByDanceSchoolId(danceSchoolId);
    return new ResponseEntity<>(courses, HttpStatus.OK);
}

}
