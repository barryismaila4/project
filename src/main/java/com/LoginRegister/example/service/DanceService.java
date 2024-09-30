package com.LoginRegister.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.LoginRegister.example.entity.Course;
import com.LoginRegister.example.entity.DanceCategory;
import com.LoginRegister.example.entity.DanceSchool;
import com.LoginRegister.example.entity.DanceStyle;
import com.LoginRegister.example.repository.CourseRepository;
import com.LoginRegister.example.repository.DanceCategoryRepository;
import com.LoginRegister.example.repository.DanceSchoolRepository;
import com.LoginRegister.example.repository.DanceStyleRepository;

@Service
@Transactional
public class DanceService {

    @Autowired
    private DanceCategoryRepository danceCategoryRepository;

    @Autowired
    private DanceStyleRepository danceStyleRepository;

    @Autowired
    private DanceSchoolRepository danceSchoolRepository;

    @Autowired
    private CourseRepository courseRepository;

    // *** DanceCategory services ***

    public DanceCategory addDanceCategory(DanceCategory danceCategory) {
        return danceCategoryRepository.save(danceCategory);
    }

    public List<DanceCategory> getAllDanceCategories() {
        return danceCategoryRepository.findAll();
    }

    public Optional<DanceCategory> getDanceCategoryById(Long id) {
        return danceCategoryRepository.findById(id);
    }

    public void deleteDanceCategory(Long id) {
        danceCategoryRepository.deleteById(id);
    }

    public DanceCategory updateDanceCategory(Long id, DanceCategory updatedDanceCategory) {
        Optional<DanceCategory> optionalDanceCategory = danceCategoryRepository.findById(id);
        if (optionalDanceCategory.isPresent()) {
            DanceCategory existingDanceCategory = optionalDanceCategory.get();
            existingDanceCategory.setName(updatedDanceCategory.getName());
            return danceCategoryRepository.save(existingDanceCategory);
        } else {
            throw new IllegalArgumentException("DanceCategory with ID " + id + " not found.");
        }
    }

    // *** DanceStyle services ***

    public DanceStyle addDanceStyle(Long danceCategoryId, DanceStyle danceStyle) {
        Optional<DanceCategory> optionalDanceCategory = danceCategoryRepository.findById(danceCategoryId);
        if (optionalDanceCategory.isPresent()) {
            DanceCategory danceCategory = optionalDanceCategory.get();
            danceStyle.setDanceCategory(danceCategory);
            return danceStyleRepository.save(danceStyle);
        } else {
            throw new IllegalArgumentException("DanceCategory with ID " + danceCategoryId + " not found.");
        }
    }

    public List<DanceStyle> getAllDanceStyles() {
        return danceStyleRepository.findAll();
    }

    public Optional<DanceStyle> getDanceStyleById(Long id) {
        return danceStyleRepository.findById(id);
    }

    public void deleteDanceStyle(Long id) {
        danceStyleRepository.deleteById(id);
    }

    public DanceStyle updateDanceStyle(Long id, Long danceCategoryId, DanceStyle updatedDanceStyle) {
        Optional<DanceStyle> optionalDanceStyle = danceStyleRepository.findById(id);
        if (optionalDanceStyle.isPresent()) {
            DanceStyle existingDanceStyle = optionalDanceStyle.get();
            existingDanceStyle.setName(updatedDanceStyle.getName());

            Optional<DanceCategory> optionalDanceCategory = danceCategoryRepository.findById(danceCategoryId);
            if (optionalDanceCategory.isPresent()) {
                DanceCategory danceCategory = optionalDanceCategory.get();
                existingDanceStyle.setDanceCategory(danceCategory);
                return danceStyleRepository.save(existingDanceStyle);
            } else {
                throw new IllegalArgumentException("DanceCategory with ID " + danceCategoryId + " not found.");
            }
        } else {
            throw new IllegalArgumentException("DanceStyle with ID " + id + " not found.");
        }
    }

    // *** DanceSchool services ***

    public DanceSchool addDanceSchool(Long danceStyleId, DanceSchool danceSchool) {
        Optional<DanceStyle> optionalDanceStyle = danceStyleRepository.findById(danceStyleId);
        if (optionalDanceStyle.isPresent()) {
            DanceStyle danceStyle = optionalDanceStyle.get();
            danceSchool.setDanceStyle(danceStyle);
            return danceSchoolRepository.save(danceSchool);
        } else {
            throw new IllegalArgumentException("DanceStyle with ID " + danceStyleId + " not found.");
        }
    }

    public List<DanceSchool> getAllDanceSchools() {
        return danceSchoolRepository.findAll();
    }

    public Optional<DanceSchool> getDanceSchoolById(Long id) {
        return danceSchoolRepository.findById(id);
    }

    public void deleteDanceSchool(Long id) {
        danceSchoolRepository.deleteById(id);
    }

    public DanceSchool updateDanceSchool(Long id, Long danceStyleId, DanceSchool updatedDanceSchool) {
        Optional<DanceSchool> optionalDanceSchool = danceSchoolRepository.findById(id);
        if (optionalDanceSchool.isPresent()) {
            DanceSchool existingDanceSchool = optionalDanceSchool.get();
            existingDanceSchool.setName(updatedDanceSchool.getName());
            existingDanceSchool.setPosition(updatedDanceSchool.getPosition());
            existingDanceSchool.setHoraire(updatedDanceSchool.getHoraire());

            Optional<DanceStyle> optionalDanceStyle = danceStyleRepository.findById(danceStyleId);
            if (optionalDanceStyle.isPresent()) {
                DanceStyle danceStyle = optionalDanceStyle.get();
                existingDanceSchool.setDanceStyle(danceStyle);
                return danceSchoolRepository.save(existingDanceSchool);
            } else {
                throw new IllegalArgumentException("DanceStyle with ID " + danceStyleId + " not found.");
            }
        } else {
            throw new IllegalArgumentException("DanceSchool with ID " + id + " not found.");
        }
    }

    // *** Course services ***

    public Course addCourse(Long danceSchoolId, Course course) {
        Optional<DanceSchool> optionalDanceSchool = danceSchoolRepository.findById(danceSchoolId);
        if (optionalDanceSchool.isPresent()) {
            DanceSchool danceSchool = optionalDanceSchool.get();
            course.setDanceSchool(danceSchool);
            return courseRepository.save(course);
        } else {
            throw new IllegalArgumentException("DanceSchool with ID " + danceSchoolId + " not found.");
        }
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    public Course updateCourse(Long id, Long danceSchoolId, Course updatedCourse) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isPresent()) {
            Course existingCourse = optionalCourse.get();
            existingCourse.setName(updatedCourse.getName());
            existingCourse.setInstructor(updatedCourse.getInstructor());
            existingCourse.setSchedule(updatedCourse.getSchedule());
            existingCourse.setContenu(updatedCourse.getContenu());

            Optional<DanceSchool> optionalDanceSchool = danceSchoolRepository.findById(danceSchoolId);
            if (optionalDanceSchool.isPresent()) {
                DanceSchool danceSchool = optionalDanceSchool.get();
                existingCourse.setDanceSchool(danceSchool);
                return courseRepository.save(existingCourse);
            } else {
                throw new IllegalArgumentException("DanceSchool with ID " + danceSchoolId + " not found.");
            }
        } else {
            throw new IllegalArgumentException("Course with ID " + id + " not found.");
        }
    }
    // Ajoutez cette méthode dans votre DanceService

public List<DanceStyle> getDanceStylesByCategoryId(Long categoryId) {
    Optional<DanceCategory> optionalDanceCategory = danceCategoryRepository.findById(categoryId);
    if (optionalDanceCategory.isPresent()) {
        return danceStyleRepository.findByDanceCategory(optionalDanceCategory.get());
    } else {
        throw new IllegalArgumentException("DanceCategory with ID " + categoryId + " not found.");
    }
}

    // Méthode pour obtenir les écoles basées sur l'ID du style
    public List<DanceSchool> getDanceSchoolsByStyleId(Long styleId) {
        Optional<DanceStyle> optionalDanceStyle = danceStyleRepository.findById(styleId);
        if (optionalDanceStyle.isPresent()) {
            return danceSchoolRepository.findByDanceStyle(optionalDanceStyle.get());
        } else {
            throw new IllegalArgumentException("DanceStyle with ID " + styleId + " not found.");
        }
    }

    // Méthode pour obtenir les cours par ID d'école de danse
    public List<Course> getCoursesByDanceSchoolId(Long danceSchoolId) {
        DanceSchool danceSchool = danceSchoolRepository.findById(danceSchoolId)
                .orElseThrow(() -> new IllegalArgumentException("DanceSchool with ID " + danceSchoolId + " not found."));
        return courseRepository.findByDanceSchool(danceSchool);
    }

}
